/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from "react"
import { toast } from "react-toastify"
import { updateOrderStatusAPI } from "@/app/api"
import { Order, OrderItem } from "@/app/types"

export const Order_List = ({ order, onStatusUpdate, isDisable }: {order: Order, onStatusUpdate:()=>void, isDisable: boolean}) => {
  const [detail, setDetail] = useState(false)
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "₫"
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("vi-VN", {
      dateStyle: "medium",
      timeStyle: "short",
    })
  }

  const handleViewDetails = () => {
    setDetail(!detail)
  }

  const handleUpdateStatus = async () => {
    try {
      const newStatus =
        order.status === "Đang chờ xử lý" ? "Đang xử lý" : "Đang giao hàng"
      const response = await updateOrderStatusAPI(order._id, newStatus)
      toast.success(response.message || "Cập nhật trạng thái thành công")
      onStatusUpdate() // Gọi callback để làm mới danh sách
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Không thể cập nhật trạng thái")
      } else {
        toast.error("Không thể cập nhật trạng thái")
      }
    }
  }

  const getActionButton = () => {
    switch (order.status) {
      case "Đang chờ xử lý":
        return (
          <button className="viewButton" onClick={handleUpdateStatus} disabled={!isDisable}>
            Xử lý
          </button>
        )
      case "Đang xử lý":
        return (
          <button className="viewButton" onClick={handleUpdateStatus} disabled={!isDisable}>
            Đã xử lý
          </button>
        )
      default:
        return (
          <button className="viewButton disabled" disabled>
            Không khả dụng
          </button>
        )
    }
  }

  const paymentMethodMap = {
    cod: "Thanh toán khi nhận hàng",
    bank: "Chuyển khoản ngân hàng"
  }
  const shippingMethodMap = {
    standard: "Giao hàng tiêu chuẩn",
    express: "Giao hàng nhanh"
  }

  return (
    <div>
      <div className="orderItem">
        <div className="orderId">
          <span>{order._id}</span>
        </div>
        <div className="orderPrice">
          <span>{formatPrice(order.total)}</span>
        </div>
        <div className="orderStatus">
          <span>{order.status}</span>
        </div>
        <div className="orderDate">
          <span>{formatDate(order.createdAt)}</span>
        </div>
        <div className="orderShippingInfo">
          <span>
            {order.shippingInfo.fullName}, {order.shippingInfo.phone}, {order.shippingInfo.address}
          </span>
        </div>
        <div className="orderBtn">
          {getActionButton()}
          <button className="viewButton" onClick={handleViewDetails}>
            Chi tiết
          </button>
        </div>
      </div>
      <div className={detail?"order-vsb":"order-hidden"}>
        <div>
          <div>
            {/* thông tin tài khoản */}
          </div>
          <div>
            <p className="order-items-info"><strong>Khách hàng:</strong> {order.userId}</p>
            <p className="order-items-info"><strong>Phương thức thanh toán:</strong> {paymentMethodMap[order.paymentMethod]}</p>
            <p className="order-items-info"><strong>Ghi chú:</strong> {order.shippingInfo.note}</p>
            <p className="order-items-info"><strong>Phương thức giao hàng:</strong> {shippingMethodMap[order.shippingInfo.shippingMethod]}</p>
            <p className="order-items-info"><strong>Phí vận chuyển:</strong> {formatPrice(order.shippingFee)}</p>
            {order.promotion && order.promotion.discount > 0 && (
              <p className="order-items-info"><strong>Giảm giá:</strong> -{formatPrice(order.promotion.discount)}</p>
            )}
          </div>
        </div>
        <div className="order-items">
          <div className="order-item">
            <span></span>
            <strong>Tên sản phẩm</strong>
            <strong>Đơn giá</strong>
            <strong>Số lượng</strong>
            <strong>Tổng</strong>
          </div>
          {order.items.map((item: OrderItem) => (
            <div key={item.productId._id} className="order-item">
              <img src={item.productId?.img?.[0]} alt="" className="item-img"/>
              <span>
                {item.productId?.productName || "Sản phẩm không xác định"}
              </span>
              <span>{formatPrice(item.price)}</span>
              <span>{item.quantity}</span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}