"use client"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/app/contexts/AuthContext"
import { ToastContainer, toast } from "react-toastify"
import { getAddressesAPI, getUserOrdersAPI, cancelOrderAPI, receiveOrderAPI } from "@/app/api"
import { Order } from "@/app/types"
import Link from "next/link"
import styles from "@/app/page.module.css"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import "../account.css"
import "./orders.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function OrdersPage() {
  return (
    <div className={styles.main}>
      <Header />
      <Orders />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000} />
    </div>
  )
}

function Orders() {
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()
  const [addresses, setAddresses] = useState([])
  const [orders, setOrders] = useState([])
  const [loadingOrders, setLoadingOrders] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/pages/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      fetchAddresses()
      fetchOrders()
    }
  }, [user])

  const fetchAddresses = async () => {
    try {
      const response = await getAddressesAPI()
      setAddresses(response.addresses || [])
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Không thể tải danh sách địa chỉ")
      } else {
        toast.error("Không thể tải danh sách địa chỉ")
      }
    }
  }

  const fetchOrders = async () => {
    try {
      setLoadingOrders(true)
      const response = await getUserOrdersAPI()
      setOrders(response.orders || [])
      setError(null)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Không thể tải danh sách đơn hàng")
      } else {
        toast.error("Không thể tải danh sách đơn hàng")
      }
    } finally {
      setLoadingOrders(false)
    }
  }

  const handleCancelOrder = async (orderId: string) => {
    try {
      const response = await cancelOrderAPI(orderId)
      toast.success(response.message || "Hủy đơn hàng thành công!")
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Không thể hủy đơn hàng")
      } else {
        toast.error("Không thể hủy đơn hàng")
      }
    } finally {
      await fetchOrders()
    }
  }

  const handleReceiveOrder = async (orderId: string) => {
    try {
      const response = await receiveOrderAPI(orderId)
      toast.success(response.message || "Xác nhận nhận hàng thành công!")
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Không thể xác nhận đơn hàng")
      } else {
        toast.error("Không thể xác nhận đơn hàng")
      }
    } finally {
      await fetchOrders()
    }
  }

  if (loading) {
    return <h2 style={{ justifySelf: "center" }}>Đang tải...</h2>
  }

  if (!user) {
    return null
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "₫"
  }

  const tmp = user.fullName.split(" ")
  const name = tmp[tmp.length - 1] + " " + tmp[0]

  const formatDate = (date: number) => {
    const d = new Date(date)
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`
  }

  return (
    <div>
      <div className="acc-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>
            <Link href="/pages/account">Trang khách hàng</Link>
          </span>
          <span className="separator">/</span>
          <span>Đơn hàng của bạn</span>
        </div>
        <h1 className="banner-title">Đơn hàng của bạn</h1>
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
                  <li><Link href="/pages/account/addresses">Sổ địa chỉ ({addresses.length})</Link></li>
                </ul>
              </div>
            </div>
            <div className="acc-content-right">
              <h1>Đơn hàng của bạn</h1>
              {loadingOrders ? (
                <p>Đang tải đơn hàng...</p>
              ) : error ? (
                <p className="error-message">{error}</p>
              ) : orders.length === 0 ? (
                <p>Bạn chưa có đơn hàng nào.</p>
              ) : (
                <div className="order-table-wrapper">
                  <table className="order-table">
                    <thead>
                      <tr>
                        <th>Mã đơn hàng</th>
                        <th>Ngày đặt hàng</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order: Order) => (
                        <tr key={order._id}>
                          <td>#{order._id}</td>
                          <td>{formatDate(order.createdAt)}</td>
                          <td>{formatPrice(order.total)}</td>
                          <td>{order.status}</td>
                          <td>
                            <Link href={`/pages/account/orders/${order._id}`} className="btn-view-details">
                              Xem chi tiết
                            </Link>
                            {(order.status === "Đang chờ xử lý" || order.status === "Đang xử lý") ? (
                              <button
                                className="btn-cancel-order"
                                onClick={() => handleCancelOrder(order._id)}
                              >
                                Hủy đơn hàng
                              </button>
                            ) : order.status === "Đang giao hàng" ? (
                              <button
                                className="btn-receive-order"
                                onClick={() => handleReceiveOrder(order._id)}
                              >
                                Đã nhận hàng
                              </button>
                            ) : (<></>)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}