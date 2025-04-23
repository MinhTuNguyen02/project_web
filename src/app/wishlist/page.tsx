"use client"
// import "../resetCss.css"
import React, { useContext, useEffect } from "react"
import Link from "next/link"
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useRouter } from "next/navigation"
import { CartContext } from "../contexts/cartContext"
import { AuthContext } from "../contexts/AuthContext"
import { removeFromWishlistAPI, addToCartAPI } from "../api/index"
import { toast, ToastContainer } from "react-toastify"
import Header from "../component/Header"
import Footer from "../component/Footer"
import "./wishList.css"

export default function WishlistPage() {
  const { user, loading: authLoading } = useContext(AuthContext)
  const { fetchWishlist } = useContext(CartContext)
  const router = useRouter()

  // Chuyển hướng nếu chưa đăng nhập
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  // Tải wishlist khi đã đăng nhập
  useEffect(() => {
    if (user && !authLoading) {
      fetchWishlist()
    }
  }, [user, authLoading, fetchWishlist])

  if (authLoading) {
    return <div>Đang tải...</div>
  }

  if (!user) {
    return null // Không render gì khi chưa đăng nhập
  }

  return (
    <div className="page-wrapper">
      <Header />
      <Wishlist />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function Wishlist() {
  const { wishlist, updateWishlist, updateCart, wishlistLoading } = useContext(CartContext)
  const router = useRouter()

  const handleRemoveFromWishlist = async (productId) => {
    try {
      const response = await removeFromWishlistAPI(productId)
      updateWishlist(response.wishlist) // Cập nhật state trực tiếp
      toast.success("Đã xóa khỏi yêu thích")
    } catch (err) {
      toast.error(err.message || "Không thể xóa khỏi yêu thích")
    }
  }

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCartAPI(productId, 1)
      updateCart(response.cart) // Cập nhật giỏ hàng
      toast.success("Đã thêm vào giỏ hàng")
    } catch (err) {
      toast.error(err.message || "Không thể thêm vào giỏ hàng")
    }
  }

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + " ₫"
  }

  return (
    <div className="page_wishlist">
      <div className="wl-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>Sản phẩm yêu thích</span>
        </div>
        <h1 className="banner-title">SẢN PHẨM YÊU THÍCH</h1>
      </div>
      <div className="container">        
        {wishlistLoading ? (
          <p>Đang tải danh sách yêu thích...</p>
        ) : wishlist.products.length === 0 ? (
          <div className="empty-wishlist">
            <p style={{margin:'15px 0'}}>Danh sách yêu thích của bạn đang trống.</p>
            <Link href="/allProducts" className="btn-shop-now">
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <div className="wishlist-container">
            <div className="wishlist-grid">
              {wishlist.products.map((product) => (
                <div key={product._id} className="wishlist-item">
                  <div
                    className="wishlist-image-wrapper"
                    onClick={() => router.push(`/productDetails/${product._id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={product.img[0] || "/img/placeholder.jpg"}
                      alt={product.productName}
                      className="wishlist-image"
                    />
                  </div>
                  <div
                    className="wishlist-title"
                    onClick={() => router.push(`/productDetails/${product._id}`)}
                  >
                    <h3 style={{display: 'inline'}}>
                      {product.productName}
                    </h3>
                  </div>
                  <div className="wishlist-price">{formatPrice(product.price)}</div>
                  <div className="wishlist-actions">
                    <button
                      className="wishlist-button"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      <i className="fas fa-basket-shopping"></i> Thêm vào giỏ
                    </button>
                    <button
                      className="wishlist-remove-button"
                      onClick={() => handleRemoveFromWishlist(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}