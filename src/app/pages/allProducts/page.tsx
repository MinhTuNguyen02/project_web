/* eslint-disable @next/next/no-img-element */
"use client"
import "./product_css.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import React, { useState, useRef, useEffect, useContext } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { fetchCategoryAPI, fetchProductAPI, addToCartAPI, addToWishlistAPI, removeFromWishlistAPI } from "@/app/api/index"
import { AuthContext } from "@/app/contexts/AuthContext"
import { CartContext } from "@/app/contexts/cartContext"
import { toast, ToastContainer } from "react-toastify"
import Header from "@/app/component/header_footer/Header"
import BackHeader from "@/app/component/header_footer/BackHeader"
import Footer from "@/app/component/header_footer/Footer"
import { Category, Product } from "@/app/types"

export default function Home() {
  return (
    <div className="page-wrapper">
      <BackHeader />
      <Header />
      <ProductPage />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000} />
    </div>
  )
}

function ProductPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user } = useContext(AuthContext)
  const { wishlist, updateCart, updateWishlist } = useContext(CartContext)
  const productMainRef = useRef<HTMLDivElement>(null)

  const [isOpenCategory, setIsOpenCategory] = useState(true)
  const [isOpenSort, setIsOpenSort] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState("default")
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [categories, setCategories] = useState<Category[]>([])
  const categoryIdFromQuery = searchParams.get("categoryId") || ""
  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryIdFromQuery)
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [wishlistStatus, setWishlistStatus] = useState<Record<string, boolean>>({})
  const productsPerPage = 9

  const searchQuery = searchParams.get("search") || ""

  useEffect(() => {
    if (wishlist?.products) {
      const status: Record<string, boolean> = {}
      wishlist.products.forEach((p: Product) => {
        status[p._id] = true
      })
      setWishlistStatus(status)
    }
  }, [wishlist])

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategoryAPI()
        setCategories(data)
        if (categoryIdFromQuery && data.some((cat: Category) => cat._id === categoryIdFromQuery)) {
          setSelectedCategoryId(categoryIdFromQuery)
        } else {
          setSelectedCategoryId("")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Không thể tải danh mục")
      }
    }
    loadCategories()
  }, [categoryIdFromQuery])

  useEffect(() => {
    const abortController = new AbortController()
    const loadProducts = async () => {
      if (!categories.length) return
      setLoading(true)
      try {
        const data = await fetchProductAPI(selectedCategoryId, searchQuery)
        setProducts(data)
        setFilteredProducts(data) // Ban đầu, filteredProducts giống products
        if (data.length === 0 && (searchQuery || selectedCategoryId)) {
          toast.info("Không tìm thấy sản phẩm phù hợp")
        }
      } catch (err) {
        if (err instanceof Error){
          if (err.name === 'AbortError') return
          setError("Không thể tải sản phẩm")
          toast.error("Không thể tải sản phẩm")
        }
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
    return () => abortController.abort()
  }, [categories, selectedCategoryId, searchQuery])

  useEffect(() => {
    // Lọc sản phẩm dựa trên minPrice và maxPrice
    let filtered = [...products]
    const min = parseFloat(minPrice)
    const max = parseFloat(maxPrice)
    if (!isNaN(min) && !isNaN(max) && min >= 0 && max >= min) {
      filtered = filtered.filter(product => product.price >= min && product.price <= max)
    }
    setFilteredProducts(filtered)
    setCurrentPage(1) // Đặt lại trang về 1 khi lọc
  }, [minPrice, maxPrice, products])

  const toggleCategory = () => setIsOpenCategory(!isOpenCategory)
  const toggleSort = () => setIsOpenSort(!isOpenSort)

  const handleSortChange = (option: string) => {
    setSortOption(option)
    setCurrentPage(1)
    scrollToTop()
  }

  const handleApplyPriceRange = () => {
    const min = parseFloat(minPrice)
    const max = parseFloat(maxPrice)
    if (isNaN(min) || isNaN(max) || min < 0 || max < min) {
      toast.error("Vui lòng nhập khoảng giá hợp lệ!")
      return
    }
    scrollToTop()
  }

  const handleResetPriceRange = () => {
    setMinPrice("")
    setMaxPrice("")
    setFilteredProducts(products)
    setCurrentPage(1)
    scrollToTop()
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId)
    setCurrentPage(1)
    const params = new URLSearchParams(searchParams)
    if (categoryId) {
      params.set('categoryId', categoryId)
    } else {
      params.delete('categoryId')
    }
    router.push(`/pages/allProducts?${params.toString()}`)
  }

  const navigateToProductDetail = (productId: string) => {
    router.push(`/pages/productDetails/${productId}`)
  }

  const handleAddToCart = async (productId: string) => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào giỏ hàng")
      router.push("/pages/login")
      return
    }
    try {
      const response = await addToCartAPI(productId, 1)
      updateCart(response.cart)
      toast.success("Đã thêm vào giỏ hàng")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Không thể thêm vào giỏ hàng")
    }
  }

  const handleToggleWishlist = async (productId: string) => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào yêu thích")
      router.push("/pages/login")
      return
    }
    try {
      let response
      const isInWishlist = wishlistStatus[productId] || false
      if (isInWishlist) {
        response = await removeFromWishlistAPI(productId)
        toast.success("Đã xóa khỏi yêu thích")
        setWishlistStatus((prev) => {
          const newStatus = { ...prev }
          delete newStatus[productId]
          return newStatus
        })
      } else {
        response = await addToWishlistAPI(productId)
        toast.success("Đã thêm vào yêu thích")
        setWishlistStatus((prev) => ({
          ...prev,
          [productId]: true,
        }))
      }
      updateWishlist(response.wishlist)
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Không thể cập nhật yêu thích")
    }
  }

  const scrollToTop = () => {
    productMainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const sortProducts = (products: Product[]) => {
    switch (sortOption) {
      case "name-az":
        return [...products].sort((a, b) => a.productName.localeCompare(b.productName))
      case "name-za":
        return [...products].sort((a, b) => b.productName.localeCompare(a.productName))
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price)
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price)
      case "purchaseCount":
        return [...products].sort((a, b) => b.purchaseCount - a.purchaseCount)
      default:
        return products
    }
  }

  const sortedProducts = sortProducts(filteredProducts)
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    scrollToTop()
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      scrollToTop()
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      scrollToTop()
    }
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "₫"
  }

  return (
    <div className="page_product">
      <div className="allproduct-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>{searchQuery ? `Tìm kiếm: ${searchQuery}` : "Tất cả sản phẩm"}</span>
        </div>
        <h1 className="banner-title">{searchQuery ? `KẾT QUẢ TÌM KIẾM` : "TẤT CẢ SẢN PHẨM"}</h1>
      </div>

      <div className="all-prod-container">
        <div className="product-container">
          <div className="product-sidebar">
            <div className="price-range-inputs">
              <h3 className="filter-range">Lọc theo giá</h3>
              <input
                type="number"
                placeholder="Giá tối thiểu"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                min="0"
                className="price-input"
              />
              <input
                type="number"
                placeholder="Giá tối đa"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min="0"
                className="price-input"
              />
              <button onClick={handleApplyPriceRange} className="apply-price-button">
                Áp dụng
              </button>
              {(minPrice || maxPrice) && (
                <button onClick={handleResetPriceRange} className="reset-price-button">
                  Xóa bộ lọc
                </button>
              )}
            </div>
            <div className={`filter-section ${isOpenCategory ? "open" : ""}`}>
              <h3 onClick={toggleCategory} className="filter-title">
                DANH MỤC
                <i className="fas fa-chevron-down"></i>
              </h3>
              <ul className="category-list">
                <li>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      id="all-categories"
                      checked={selectedCategoryId === ""}
                      onChange={() => handleCategoryChange("")}
                    />
                    <span>Tất cả</span>
                  </label>
                </li>
                {categories.map((category: Category) => (
                  <li key={category._id}>
                    <label>
                      <input
                        type="radio"
                        name="category"
                        id={category._id}
                        checked={selectedCategoryId === category._id}
                        onChange={() => handleCategoryChange(category._id)}
                      />
                      <span>{category.categoryName}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`filter-section ${isOpenSort ? "open" : ""}`}>
              <h3 onClick={toggleSort} className="filter-title">
                SẮP XẾP
                <i className="fas fa-chevron-down"></i>
              </h3>
              <ul className="category-list">
                <li>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="sort-default"
                      checked={sortOption === "default"}
                      onChange={() => handleSortChange("default")}
                    />
                    <span>Mặc định</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="sort-az"
                      checked={sortOption === "name-az"}
                      onChange={() => handleSortChange("name-az")}
                    />
                    <span>Tên A-Z</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="sort-za"
                      checked={sortOption === "name-za"}
                      onChange={() => handleSortChange("name-za")}
                    />
                    <span>Tên Z-A</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="sort-price-asc"
                      checked={sortOption === "price-asc"}
                      onChange={() => handleSortChange("price-asc")}
                    />
                    <span>Giá thấp đến cao</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="sort-price-desc"
                      checked={sortOption === "price-desc"}
                      onChange={() => handleSortChange("price-desc")}
                    />
                    <span>Giá cao xuống thấp</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="sort-purchaseCount"
                      checked={sortOption === "purchaseCount"}
                      onChange={() => handleSortChange("purchaseCount")}
                    />
                    <span>Lượt bán</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-main" ref={productMainRef}>
            {loading && <p>Đang tải sản phẩm...</p>}
            {error && <p className="error">{error}</p>}
            <div className="product-grid">
              {currentProducts.length > 0 ? (
                currentProducts.map((product: Product) => (
                  <div key={product._id} className="product-item">
                    <div
                      className="product-image-wrapper"
                      onClick={() => navigateToProductDetail(product._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={product.img[0] || "/img/placeholder.jpg"}
                        alt={product.productName}
                        className="product-image"
                      />
                      <button
                        className={`wishlistButton ${wishlistStatus[product._id] ? "active" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleToggleWishlist(product._id)
                        }}
                      >
                        <i className={wishlistStatus[product._id] ? "fas fa-heart" : "far fa-heart"}></i>
                      </button>
                    </div>
                    <h3
                      className="product-title"
                      onClick={() => navigateToProductDetail(product._id)}
                      style={{ cursor: "pointer" }}
                    >
                      {product.productName}
                    </h3>
                    <div
                      className="product-price"
                      onClick={() => navigateToProductDetail(product._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="current-price">{formatPrice(product.price)}</span>
                    </div>
                    <button
                      className="product-button custom-button"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      <i className="fas fa-basket-shopping"></i> Thêm vào giỏ
                    </button>
                  </div>
                ))
              ) : (
                <div className="no-products-message">
                  <p>Không tìm thấy sản phẩm.</p>
                </div>
              )}
            </div>
            {sortedProducts.length > 0 && totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="pagination-button"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`pagination-button ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="pagination-button"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}