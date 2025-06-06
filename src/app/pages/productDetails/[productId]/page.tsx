/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import BackHeader from "@/app/component/header_footer/BackHeader"
import "./productDetail_css.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import React, { useState, useEffect, useContext } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { CartContext } from "@/app/contexts/cartContext"
import { AuthContext } from "@/app/contexts/AuthContext"
import { fetchProductAPI, fetchProductByIdAPI, addToCartAPI, addToWishlistAPI, removeFromWishlistAPI } from "@/app/api/index"
import { toast, ToastContainer } from "react-toastify"
import { Product } from "@/app/types"
import { ParamValue } from "next/dist/server/request/params"

function ProductDetailPage() {
  return (
    <div className="page-wrapper">
      <BackHeader/>
      <Header />
      <ProductDetail />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function ProductDetail() {
  const params = useParams()
  const router = useRouter()
  const productId = params.productId
  const { user } = useContext(AuthContext)
  const { wishlist, updateCart, updateWishlist } = useContext(CartContext)
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [isInWishlist, setIsInWishlist] = useState(false)
  const [mainImage, setMainImage] = useState("")

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true)
      try {
        // Lấy chi tiết sản phẩm
        const foundProduct = await fetchProductByIdAPI(productId)
        setProduct(foundProduct)
        setMainImage(foundProduct.img[0] || "/img/placeholder.jpg")

        // Lấy sản phẩm liên quan
        const related = await fetchProductAPI(foundProduct.categoryId)
        setRelatedProducts(
          related
            .filter((p: { _id: ParamValue }) => p._id !== productId)
            .slice(0, 4)
        )

        // Kiểm tra sản phẩm có trong wishlist
        if (wishlist?.products) {
          setIsInWishlist(wishlist.products.some((p: { _id: ParamValue }) => p._id === productId))
        }
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message || "Không thể tải sản phẩm")
        } else {
          toast.error("Không thể tải sản phẩm")
        }
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [productId]) 

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " ₫"
  }

  const handleIncreaseQuantity = () => {
    if (product && quantity < product.inventory) {
      setQuantity((prev) => prev + 1)
    }
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào giỏ hàng")
      router.push("/pages/login")
      return
    }
    if (!product || product.inventory === 0) {
      toast.error("Sản phẩm không khả dụng")
      return
    }

    try {
      const response = await addToCartAPI(productId, quantity)
      updateCart(response.cart)
      toast.success(`Đã thêm ${quantity} ${product.productName} vào giỏ hàng!`)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Không thể thêm vào giỏ hàng")
      } else {
        toast.error("Không thể thêm vào giỏ hàng")
      }
    }
  }

  const handleToggleWishlist = async () => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào danh sách yêu thích")
      router.push("/pages/login")
      return
    }

    try {
      let response
      if (isInWishlist) {
        response = await removeFromWishlistAPI(productId)
        toast.success("Đã xóa khỏi danh sách yêu thích")
        setIsInWishlist(false)
      } else {
        response = await addToWishlistAPI(productId)
        toast.success("Đã thêm vào danh sách yêu thích")
        setIsInWishlist(true)
      }
      updateWishlist(response.wishlist)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Không thể cập nhật danh sách yêu thích")
      } else {
        toast.error("Không thể cập nhật danh sách yêu thích")
      }
    }
  }

  const handleBuyNow = async () => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để mua hàng")
      router.push("/pages/login")
      return
    }
    if (!product || product.inventory === 0) {
      toast.error("Sản phẩm không khả dụng")
      return
    }

    try {
      const response = await addToCartAPI(productId, quantity)
      updateCart(response.cart)
      toast.success(`Đã thêm ${quantity} ${product.productName} vào giỏ hàng!`)
      router.push("/pages/cart")
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Không thể xử lý mua ngay")
      } else {
        toast.error("Không thể xử lý mua ngay")
      }
    }
  }

  const handleThumbnailClick = (img: string) => {
    setMainImage(img)
  }

  if (loading) {
    return (
      <div className="container" style={{ padding: "50px 0", textAlign: "center" }}>
        <h2>Đang tải sản phẩm...</h2>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container" style={{ padding: "50px 0", textAlign: "center" }}>
        <h2>Không tìm thấy sản phẩm</h2>
        <p>{"Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."}</p>
        <Link href="pages/allProducts">
          <button className="custom-button" style={{ marginTop: "20px" }}>
            Quay lại trang sản phẩm
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="productDetailPage">      
      <div className="productDetail-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>{product.productName}</span>
        </div>
        <h1 className="banner-title">{product.productName}</h1>
      </div>

      <div className="container">
        <div className="productDetailContent">
          <div className="productGallery">
            <div className="top-cont">
              <div className="top-cont-left">
                <div className="mainImage">
                  <img src={mainImage} alt={product.productName} />
                  <button
                    className={`wishlistButton ${isInWishlist ? "active" : ""}`}
                    onClick={handleToggleWishlist}
                  >
                    <i className={isInWishlist ? "fas fa-heart" : "far fa-heart"}></i>
                  </button>
                </div>

                <div className="thumbnailList">
                  {product.img.slice(0, 4).map((img, index) => (
                    <div key={index} className="thumbnailItem">
                      <img
                        src={img}
                        alt={`${product.productName} ${index + 1}`}
                        onClick={() => handleThumbnailClick(img)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="top-cont-right">
                <h1 className="productTitle">{product.productName}</h1>
                <div className="productPrice">{formatPrice(product.price)}</div>

                <div className="productMeta">
                  <div className="metaItem">
                    <span className="metaLabel">Mã sản phẩm:</span>
                    <span className="metaValue">{product._id}</span>
                  </div>
                  <div className="metaItem">
                    <span className="metaLabel">Đã bán:</span>
                    <span className="metaValue">{product.purchaseCount}</span>
                  </div>
                  <div className="metaItem">
                    <span className="metaLabel">Tình trạng:</span>
                    <span className="metaValue">
                      {product.inventory > 0 ? `Còn hàng (${product.inventory})` : "Hết hàng"}
                    </span>
                  </div>
                </div>            

                <div className="productOptionsWrapper">
                  <div className="quantity-policy-wrapper">
                    <div className="left-column">
                      <div className="quantityWrapper">
                        <label className="optionLabel">Số lượng:</label>
                        <div className="quantitySelector">
                          <button
                            className="quantityBtn"
                            onClick={handleDecreaseQuantity}
                            disabled={quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="quantityInput"
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(
                                Math.max(1, Math.min(parseInt(e.target.value) || 1, product.inventory))
                              )
                            }
                          />
                          <button
                            className="quantityBtn"
                            onClick={handleIncreaseQuantity}
                            disabled={quantity >= product.inventory}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="productActions">
                    <button
                      className="btnAddToCart"
                      onClick={handleAddToCart}
                      disabled={product.inventory === 0}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <button
                      className="btnBuyNow"
                      onClick={handleBuyNow}
                      disabled={product.inventory === 0}
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>

                <div className="promotions">
                  <span className="promotionTitle">Ưu đãi liên quan:</span>
                  <div className="promotionItem">
                    <i className="fas fa-check-circle promotionIcon"></i>
                    <span className="promotionText">Giao hàng miễn phí nội thành</span>
                  </div>
                  <div className="promotionItem">
                    <i className="fas fa-check-circle promotionIcon"></i>
                    <span className="promotionText">Đổi trả trong vòng 24h</span>
                  </div>
                </div>
              </div>  
            </div>
            <div className="productDescription">
              <h1>Thông tin chi tiết</h1>
              <div style={{ whiteSpace: "pre-wrap", fontSize: 15, marginTop: 15 }}>
                {product.description || "Không có mô tả cho sản phẩm này."}
              </div>
            </div>
          </div>

          <div className="productInfo">            
            <div className="policy-container">
              <div className="policy-item">
                <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810719/xetai_dh7hby.svg" alt="Giao hàng" className="policy-icon" />
                <div className="policy-content">
                  <h4>GIAO HÀNG FREE NỘI THÀNH</h4>
                  <p>Giao free trong nội thành HN và HCM</p>
                </div>
              </div>
              <div className="policy-item">
                <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810718/trahang_srcjyr.svg" alt="Trả hàng" className="policy-icon" />
                <div className="policy-content">
                  <h4>TRẢ HÀNG TRONG VÒNG 24H</h4>
                  <p>Hỗ trợ trả hàng cho khách khi sản phẩm có lỗi</p>
                </div>
              </div>
              <div className="policy-item">
                <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810717/service_3_sofcxu.webp" alt="Kiểm tra" className="policy-icon" />
                <div className="policy-content">
                  <h4>KIỂM TRA HÀNG KHI NHẬN HÀNG</h4>
                  <p>Khách hàng kiểm tra hàng trước khi nhận</p>
                </div>
              </div>
              <div className="policy-item">
                <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810718/service_4_ovxg4c.png" alt="COD" className="policy-icon" />
                <div className="policy-content">
                  <h4>THANH TOÁN COD</h4>
                  <p>Hỗ trợ khách hàng thanh toán cod</p>
                </div>
              </div>
            </div>

            {relatedProducts.length > 0 && (
              <div className="relatedProducts">
                <h4 className="relatedTitle">SẢN PHẨM LIÊN QUAN</h4>
                <div className="relatedGrid">
                  {relatedProducts.map((related) => (
                    <Link key={related._id} href={`/pages/productDetails/${related._id}`} style={{textDecoration: 'none'}}>
                      <div className="relatedItem">
                        <div className="relatedImage">
                          <img
                            src={related.img[0] || "/img/placeholder.jpg"}
                            alt={related.productName}
                          />
                        </div>
                        <div className="relatedInfo">
                          <div className="relatedName">{related.productName}</div>
                          <div className="relatedPrice">{formatPrice(related.price)}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>          
        </div>        
      </div>
    </div>
  )
}

export default ProductDetailPage