"use client"
// import "../resetCss.css"
import React, { useContext, useEffect, useState } from "react"
import Link from "next/link"
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useRouter } from "next/navigation"
import { CartContext } from "../contexts/cartContext"
import { AuthContext } from "../contexts/AuthContext"
import { updateCartQuantityAPI, deleteCartItemAPI } from "../api/index"
import { toast, ToastContainer } from "react-toastify"
import Header from "../component/Header"
import Footer from "../component/Footer"
import "./cart.css"

export default function CartPage() {
  const { user, loading: authLoading } = useContext(AuthContext)
  const { fetchCart } = useContext(CartContext)
  const router = useRouter()

  // Chuyển hướng nếu chưa đăng nhập
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  // Tải giỏ hàng khi đã đăng nhập
  useEffect(() => {
    if (user && !authLoading) {
      fetchCart()
    }
  }, [user, authLoading, fetchCart])

  if (authLoading) {
    return <div>Đang tải...</div>
  }

  if (!user) {
    return null // Không render gì khi chưa đăng nhập
  }

  return (
    <div className="page-wrapper">
      <Header />
      <Cart />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function Cart() {
  const { cart, updateCart, cartLoading } = useContext(CartContext)
  const router = useRouter()
  const [selectAll, setSelectAll] = useState(false)
  const [selectedItems, setSelectedItems] = useState([])

  useEffect(() => {
    if (cart.items.length > 0) {
      if (selectAll) {
        setSelectedItems(cart.items.map(item => item.productId._id))
      } else if (selectedItems.length === cart.items.length) {
        setSelectAll(true)
      } else {
        setSelectedItems(prev => prev.filter(id => 
          cart.items.some(item => item.productId._id === id)
        ))
      }
    } else {
      setSelectedItems([])
      setSelectAll(false)
    }
  }, [cart.items])

  const handleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    if (newSelectAll) {
      setSelectedItems(cart.items.map(item => item.productId._id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (productId) => {
    setSelectedItems(prev => {
      const newSelected = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
      
      // Cập nhật selectAll
      setSelectAll(newSelected.length === cart.items.length)
      return newSelected
    })
  }

  const handleQuantityChange = async (productId, quantity) => {
    // Đảm bảo quantity là số nguyên dương
    const newQuantity = Math.max(1, Math.floor(Number(quantity)))
    if (isNaN(newQuantity)) return

    try {
      const response = await updateCartQuantityAPI(productId, newQuantity)
      updateCart(response.cart) // Cập nhật state trực tiếp
    } catch (err) {
      toast.error(err.message || "Không thể cập nhật giỏ hàng")
    }
  }

  const handleIncreaseQuantity = (productId, currentQuantity) => {
    handleQuantityChange(productId, currentQuantity + 1)
  }

  const handleDecreaseQuantity = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      handleQuantityChange(productId, currentQuantity - 1)
    }
  }

  const handleRemoveItem = async (productId) => {
    try {
      const response = await deleteCartItemAPI(productId)
      updateCart(response.cart) // Cập nhật state trực tiếp
      toast.success("Đã xóa sản phẩm khỏi giỏ hàng")
    } catch (err) {
      toast.error(err.message || "Không thể xóa sản phẩm")
    }
  }

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + "₫"
  }

  const calculateTotal = () => {
    return cart.items
      .filter(item => selectedItems.includes(item.productId._id))
      .reduce((total, item) => total + item.productId.price * item.quantity, 0)
  }

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      toast.error("Vui lòng chọn ít nhất một sản phẩm để thanh toán")
      return
    }
    // Truyền selectedItems sang /checkout qua query params
    const selectedItemsQuery = encodeURIComponent(JSON.stringify(selectedItems))
    router.push(`/checkout?selectedItems=${selectedItemsQuery}`)
  }


  return (
    <div className="page_cart">
      <div className="cart-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>Giỏ hàng</span>
        </div>
        <h1 className="banner-title">GIỎ HÀNG</h1>
      </div>
      <div className="container">        
        {cartLoading ? (
          <p>Đang tải giỏ hàng...</p>
        ) : cart.items.length === 0 ? (
          <div className="empty-cart">
            <p style={{margin:'15px 0'}}>Giỏ hàng của bạn đang trống.</p>
            <Link href="/allProducts" className="btn-shop-now">
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <div className="cart-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th> <input type="checkbox" checked={selectAll} onChange={handleSelectAll}/> Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((item) => (
                  <tr key={item.productId._id}>
                    <td>
                      <div className="cart-product">
                        <input 
                          type="checkbox"
                          checked={selectedItems.includes(item.productId._id)} 
                          onChange={() => handleSelectItem(item.productId._id)} 
                        />
                        <img
                          src={item.productId.img[0] || "/img/placeholder.jpg"}
                          alt={item.productId.productName}
                          className="cart-product-image"
                        />
                        <span
                          onClick={() => router.push(`/productDetails/${item.productId._id}`)}
                          style={{ cursor: "pointer" }}
                        >
                          {item.productId.productName}
                        </span>
                      </div>
                    </td>
                    <td>{formatPrice(item.productId.price)}</td>
                    <td>
                      <div className="block-edit-quan">
                        <button 
                          className="edit-quan"
                          onClick={() => handleDecreaseQuantity(item.productId._id, item.quantity)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.productId._id, Number(e.target.value))}
                          className="cart-quantity-input"    
                          pattern="[0-9]*"      
                          size={1}   
                          style={{width:30, display:'inline-block', padding:'3px 0', border:'1px solid #e5e5e5', textAlign:'center'}}           
                        />
                        <button 
                          className="edit-quan"
                          onClick={() => handleIncreaseQuantity(item.productId._id, item.quantity)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>{formatPrice(item.productId.price * item.quantity)}</td>
                    <td>
                      <button
                        className="cart-remove-button"
                        onClick={() => handleRemoveItem(item.productId._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-summary">
              <h3 style={{marginBottom:10}}>Tổng cộng: {formatPrice(calculateTotal())}</h3>
              <button className="btn-checkout" onClick={handleCheckout}>
                Thanh toán
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}