"use client"
import "./product_css.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import React, { useState, useRef, useEffect, useContext } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { fetchCategoryAPI, fetchProductAPI, addToCartAPI, addToWishlistAPI, removeFromWishlistAPI } from "../api/index"
import { AuthContext } from "../contexts/AuthContext"
import { CartContext } from "../contexts/cartContext"
import { toast, ToastContainer } from "react-toastify"
import Header from "../component/Header"
import BackHeader from "../component/BackHeader"
import Footer from "../component/Footer"

export default function Home() {
  return (
    <div className="page-wrapper">
      <BackHeader/>
      <Header />
      <ProductPage />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function ProductPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user } = useContext(AuthContext)
  const { wishlist, updateCart, updateWishlist } = useContext(CartContext)
  const productMainRef = useRef(null)

  const [isOpenCategory, setIsOpenCategory] = useState(true)
  const [isOpenPrice, setIsOpenPrice] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState("default")
  const [categories, setCategories] = useState([])
  const categoryIdFromQuery = searchParams.get("categoryId") || ""
  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryIdFromQuery)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [wishlistStatus, setWishlistStatus] = useState({})
  const productsPerPage = 9

  const searchQuery = searchParams.get("search") || ""

  useEffect(() => {
    if (wishlist?.products) {
      const status = {}
      wishlist.products.forEach((p) => {
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
        if (categoryIdFromQuery && data.some(cat => cat._id === categoryIdFromQuery)) {
          setSelectedCategoryId(categoryIdFromQuery)
        } else {
          setSelectedCategoryId("")
        }
      } catch (err) {
        setError("Không thể tải danh mục")
      }
    }
    loadCategories()
  }, [categoryIdFromQuery])

  useEffect(() => {
    const abortController = new AbortController()
    const loadProducts = async () => {
      if (!categories.length || selectedCategoryId === null || selectedCategoryId === undefined) {
        return
      }
      setLoading(true)
      try {
        const data = await fetchProductAPI(selectedCategoryId, searchQuery, abortController.signal)
        if (data.length === 0 && (searchQuery || selectedCategoryId)) {
          toast.info("Không tìm thấy sản phẩm phù hợp")
        }
        setProducts(data)
      } catch (err) {
        if (err.name === 'AbortError') {
          return
        }
        setError("Không thể tải sản phẩm")
        toast.error("Không thể tải sản phẩm")
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
    return () => {
      abortController.abort()
    }
  }, [categories, selectedCategoryId, searchQuery])

  const toggleCategory = () => setIsOpenCategory(!isOpenCategory)
  const togglePrice = () => setIsOpenPrice(!isOpenPrice)

  const handleSortChange = (option) => {
    setSortOption(option)
    setCurrentPage(1)
    setTimeout(() => scrollToTop(), 100)
  }

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId)
    setCurrentPage(1)
    const params = new URLSearchParams(searchParams)
    if (categoryId) {
      params.set('categoryId', categoryId)
    } else {
      params.delete('categoryId')
    }
    router.push(`/allProducts?${params.toString()}`)
    // setTimeout(() => scrollToTop(), 100)
  }

  const navigateToProductDetail = (productId) => {
    router.push(`/productDetails/${productId}`)
  }

  const handleAddToCart = async (productId) => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào giỏ hàng")
      router.push("/login")
      return
    }
    try {
      const response = await addToCartAPI(productId, 1)
      updateCart(response.cart)
      toast.success("Đã thêm vào giỏ hàng")
    } catch (err) {
      toast.error(err.message || "Không thể thêm vào giỏ hàng")
    }
  }

  const handleToggleWishlist = async (productId) => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào yêu thích")
      router.push("/login")
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
      toast.error(err.message || "Không thể cập nhật yêu thích")
    }
  }

  const scrollToTop = () => {
    if (productMainRef.current) {
      productMainRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const sortProducts = (products) => {
    switch (sortOption) {
      case "name-az":
        return [...products].sort((a, b) => a.productName.localeCompare(b.productName))
      case "name-za":
        return [...products].sort((a, b) => b.productName.localeCompare(b.productName))
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

  const sortedProducts = sortProducts(products)
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => {
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

  const formatPrice = (price) => {
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
                {categories.map((category) => (
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
            <div className={`filter-section ${isOpenPrice ? "open" : ""}`}>
              <h3 onClick={togglePrice} className="filter-title">
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
                currentProducts.map((product) => (
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