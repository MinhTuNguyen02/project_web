"use client"
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

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  useEffect(() => {
    if (user && !authLoading) {
      fetchCart()
    }
  }, [user, authLoading, fetchCart])

  if (authLoading) {
    return <div>Đang tải...</div>
  }

  if (!user) {
    return null
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
      // Lọc selectedItems chỉ giữ các sản phẩm có inventory >0
      const validSelectedItems = selectedItems.filter(id =>
        cart.items.some(item => item.productId._id === id && item.productId.inventory > 0)
      )
      setSelectedItems(validSelectedItems)

      // Cập nhật selectAll dựa trên sản phẩm có inventory > 0
      const availableItems = cart.items.filter(item => item.productId.inventory > 0)
      if (selectAll && validSelectedItems.length !== availableItems.length) {
        setSelectedItems(availableItems.map(item => item.productId._id))
      }
      setSelectAll(validSelectedItems.length === availableItems.length && availableItems.length > 0)
    } else {
      setSelectedItems([])
      setSelectAll(false)
    }
  }, [cart.items, selectAll])

  const handleSelectAll = () => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)
    if (newSelectAll) {
      // Chỉ chọn các sản phẩm có inventory > 0
      setSelectedItems(cart.items
        .filter(item => item.productId.inventory > 0)
        .map(item => item.productId._id)
      )
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (productId) => {
    const item = cart.items.find(item => item.productId._id === productId)
    if (item.productId.inventory === 0) {
      toast.error("Sản phẩm này đã hết hàng và không thể chọn")
      return
    }
    setSelectedItems(prev => {
      const newSelected = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
      setSelectAll(
        newSelected.length === cart.items.filter(item => item.productId.inventory > 0).length &&
        newSelected.length > 0
      )
      return newSelected
    })
  }

  const handleQuantityChange = async (productId, quantity) => {
    const item = cart.items.find(item => item.productId._id === productId)
    if (item.productId.inventory === 0) {
      toast.error("Sản phẩm này đã hết hàng")
      return
    }
    const newQuantity = Math.max(1, Math.min(Math.floor(Number(quantity)), item.productId.inventory))
    if (isNaN(newQuantity)) return

    try {
      const response = await updateCartQuantityAPI(productId, newQuantity)
      updateCart(response.cart)
      if (quantity > item.productId.inventory) {
        toast.warn(`Chỉ còn ${item.productId.inventory} sản phẩm trong kho`)
      }
    } catch (err) {
      toast.error(err.message || "Không thể cập nhật giỏ hàng")
    }
  }

  const handleIncreaseQuantity = (productId, currentQuantity) => {
    const item = cart.items.find(item => item.productId._id === productId)
    if (item.productId.inventory === 0) {
      toast.error("Sản phẩm này đã hết hàng")
      return
    }
    if (currentQuantity >= item.productId.inventory) {
      toast.warn(`Chỉ còn ${item.productId.inventory} sản phẩm trong kho`)
      return
    }
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
      updateCart(response.cart)
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
      .filter(item => selectedItems.includes(item.productId._id) && item.productId.inventory > 0)
      .reduce((total, item) => total + item.productId.price * item.quantity, 0)
  }

  const handleCheckout = () => {
    const validSelectedItems = selectedItems.filter(id =>
      cart.items.some(item => item.productId._id === id && item.productId.inventory > 0)
    )
    if (validSelectedItems.length === 0) {
      toast.error("Vui lòng chọn ít nhất một sản phẩm còn hàng để thanh toán")
      return
    }
    const selectedItemsQuery = encodeURIComponent(JSON.stringify(validSelectedItems))
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
            <p style={{ margin: '15px 0' }}>Giỏ hàng của bạn đang trống.</p>
            <Link href="/allProducts" className="btn-shop-now">
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <div className="cart-container">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      disabled={cart.items.every(item => item.productId.inventory === 0)}
                    />
                    Sản phẩm
                  </th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((item) => (
                  <tr key={item.productId._id} className={item.productId.inventory === 0 ? "block-item" : ""}>
                    <td>
                      <div className="cart-product">
                        {item.productId.inventory > 0 ? (
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item.productId._id)}
                            onChange={() => handleSelectItem(item.productId._id)}
                          />
                        ) : (
                          <span style={{ color: 'red', fontSize: '12px' }}>Hết</span>
                        )}
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
                          disabled={item.productId.inventory === 0}
                          onClick={() => handleDecreaseQuantity(item.productId._id, item.quantity)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          min="1"
                          max={item.productId.inventory}
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.productId._id, Number(e.target.value))}
                          className="cart-quantity-input"
                          pattern="[0-9]*"
                          size={1}
                          disabled={item.productId.inventory === 0}
                          style={{
                            width: 30,
                            display: 'inline-block',
                            padding: '3px 0',
                            border: '1px solid #e5e5e5',
                            textAlign: 'center'
                          }}
                        />
                        <button
                          className="edit-quan"
                          disabled={item.productId.inventory === 0 || item.quantity >= item.productId.inventory}
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
              <h3 style={{ marginBottom: 10 }}>Tổng cộng: {formatPrice(calculateTotal())}</h3>
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