/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useContext, useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { AuthContext } from "@/app/contexts/AuthContext"
import { ToastContainer, toast } from "react-toastify"
import { getOrderByIdAPI } from "@/app/api"
import { Order, OrderItem } from "@/app/types"
import Link from "next/link"
import styles from "@/app/page.module.css"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "../../account.css"
import "./order-detail.css"

export default function OrderDetailPage() {
  return (
    <div className={styles.main}>
      <Header />
      <OrderDetail />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000} />
    </div>
  )
}

function OrderDetail() {
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()
  const params = useParams()
  const orderId = params.orderId
  const [order, setOrder] = useState<Order>()
  const [loadingOrder, setLoadingOrder] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/pages/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user && orderId) {
      fetchOrder()
    }
  }, [user, orderId])

  const fetchOrder = async () => {
    try {
      setLoadingOrder(true)
      const response = await getOrderByIdAPI(orderId)
      setOrder(response.order)
      setError(null)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Không thể tải chi tiết đơn hàng")
      } else {
        toast.error("Không thể tải chi tiết đơn hàng")
      }
    } finally {
      setLoadingOrder(false)
    }
  }

  if (loading || loadingOrder) {
    return <h2 style={{ justifySelf: "center" }}>Đang tải...</h2>
  }

  if (!user || error || !order) {
    return (
      <div className="page-cus-acc">
        <div className="acc-container">
          <div className="acc-content">
            <div className="acc-content-right">
              <h1>Đơn hàng #{orderId}</h1>
              <p className="error-message">{error || "Không tìm thấy đơn hàng"}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const calculateItemsTotal = (items: OrderItem[]) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "₫"
  }

  const formatDate = (date: number) => {
    const d = new Date(date)
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`
  }

  const paymentMethodMap = {
    cod: "Thanh toán khi nhận hàng",
    bank: "Chuyển khoản ngân hàng"
  }
  const shippingMethodMap = {
    standard: "Giao hàng tiêu chuẩn",
    express: "Giao hàng nhanh"
  }

  const tmp = user.fullName.split(" ")
  const name = tmp[tmp.length - 1] + " " + tmp[0]

  return (
    <div>
      <div className="acc-banner">
        <div className="breadcrumb">
          <span><Link href="/">Trang chủ</Link></span>
          <span className="separator">/</span>
          <span><Link href="/pages/account">Trang khách hàng</Link></span>
          <span className="separator">/</span>
          <span><Link href="/pages/account/orders">Đơn hàng của bạn</Link></span>
          <span className="separator">/</span>
          <span>Chi tiết đơn hàng</span>
        </div>
        <h1 className="banner-title">Chi tiết đơn hàng</h1>
      </div>

      <div className="page-cus-acc">
        <div className="acc-container">
          <div className="acc-content">
            <div className="acc-content-left">
              <div className="block-acc">
                <h5>TRANG TÀI KHOẢN</h5>
                <p>Xin chào, {name}!</p>
                <ul>
                  <li><Link href="/pages/account">Thông tin tài khoản</Link></li>
                  <li><Link href="/pages/account/orders">Đơn hàng của bạn</Link></li>
                  <li><Link href="/pages/account/changePassword">Đổi mật khẩu</Link></li>
                  <li><Link href="/pages/account/addresses">Sổ địa chỉ</Link></li>
                </ul>
              </div>
            </div>
            <div className="acc-content-right">
              <h1>Đơn hàng #{orderId}</h1>
              <div className="order-info">
                <p><strong>Ngày đặt hàng:</strong> {formatDate(order.createdAt)}</p>
                <p><strong>Trạng thái:</strong> {order.status}</p>
                <p><strong>Hình thức thanh toán:</strong> {paymentMethodMap[order.paymentMethod]}</p>
                <p><strong>Hình thức giao hàng:</strong> {shippingMethodMap[order.shippingInfo.shippingMethod]}</p>
              </div>
              <div className="shipping-info">
                <h3>Thông tin giao hàng</h3>
                <p><strong>Người nhận:</strong> {order.shippingInfo.fullName}</p>
                <p><strong>Địa chỉ:</strong> {order.shippingInfo.address}</p>
                <p><strong>Số điện thoại:</strong> {order.shippingInfo.phone}</p>
                {order.shippingInfo.note && (
                  <p><strong>Ghi chú:</strong> {order.shippingInfo.note}</p>
                )}
              </div>
              <div className="order-items">
                <h3>Danh sách sản phẩm</h3>
                <div className="order-table-wrapper">
                  <table className="order-table">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <img src={item.productId?.img[0]} alt="" />
                            {item.productId.productName || "Sản phẩm không xác định"}
                          </td>
                          <td>{formatPrice(item.price)}</td>
                          <td>{item.quantity}</td>
                          <td>{formatPrice(item.price * item.quantity)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="order-total">
                  <p><strong>Tổng tiền sản phẩm:</strong> {formatPrice(calculateItemsTotal(order.items))}</p>
                  <p><strong>Phí vận chuyển:</strong> {formatPrice(order.shippingFee)}</p>
                  {order.promotion && order.promotion.discount > 0 && (
                    <p><strong>Giảm giá:</strong> -{formatPrice(order.promotion.discount)}</p>
                  )}
                  <p><strong>Tổng tiền:</strong> {formatPrice(order.total)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}