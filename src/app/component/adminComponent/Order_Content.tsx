"use client"
import { useState, useEffect, SetStateAction } from "react"
import { toast } from "react-toastify"
import { getOrdersAPI } from "@/app/api"
import { Order_List } from "./Order_List"
import { Order } from "@/app/types"

export const Order_Content = ( {isDisable}: {isDisable: boolean} ) => {
  const [orders, setOrders] = useState<Order[]>([])
  const [filterStatus, setFilterStatus] = useState("")
  const [loading, setLoading] = useState(true)

  const statusOptions = [
    { value: "", label: "Tất cả đơn hàng" },
    { value: "Đang chờ xử lý", label: "Đang chờ xử lý" },
    { value: "Đang xử lý", label: "Đang xử lý" },
    { value: "Đang giao hàng", label: "Đang giao hàng" },
    { value: "Đã nhận hàng", label: "Đã nhận hàng" },
    { value: "Đã hủy", label: "Đã hủy" },
  ]

  // Lấy danh sách đơn hàng
  const fetchOrders = async () => {
    try {
      setLoading(true)
      const response = await getOrdersAPI()
      setOrders(response.orders || [])
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || 'Không thể tải danh sách đơn hàng')
      } else {
        toast.error('Không thể tải danh sách đơn hàng')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  // Xử lý thay đổi trạng thái lọc
  const handleFilterChange = (e: { target: { value: SetStateAction<string> } }) => {
    setFilterStatus(e.target.value)
  }

  // Lọc đơn hàng theo trạng thái
  const filteredOrders = filterStatus
    ? orders.filter((order: Order) => order.status === filterStatus)
    : orders

  return (
    <div>
      <select className="cate-comboBox" value={filterStatus} onChange={handleFilterChange}>
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {loading ? (
        <div>Đang tải...</div>
      ) : filteredOrders.length === 0 ? (
        <div>Không có đơn hàng nào.</div>
      ) : (
        <div>
          <div className="orderItem">
            <div className="orderId">
              <strong>ID</strong>
            </div>
            <div className="orderPrice">
              <strong>Tổng tiền</strong>
            </div>
            <div className="orderStatus">
              <strong>Trạng thái</strong>
            </div>
            <div className="orderDate">
              <strong>Thời gian</strong>
            </div>
            <div className="orderShippingInfo">
              <strong>Giao đến</strong>
            </div>
            <div className="orderBtn">
            </div>
          </div>
          {filteredOrders.map((order: Order) => (
            <Order_List key={order._id} order={order} onStatusUpdate={fetchOrders} isDisable={isDisable}/>
          ))}
        </div>
      )}
    </div>
  )
}