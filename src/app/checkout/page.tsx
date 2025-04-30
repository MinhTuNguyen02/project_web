"use client"
import React, { useContext, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { CartContext } from "../contexts/cartContext"
import { AuthContext } from "../contexts/AuthContext"
import { toast, ToastContainer } from "react-toastify"
import { createOrderAPI, getAddressesAPI, deleteCartItemAPI } from "../api"
import { CITIES, SHIPPING_RATES } from "../../../untils/constant"
import "./checkout.css"

export default function CheckoutPage() {
  const { user, loading: authLoading } = useContext(AuthContext)
  const { cart, fetchCart } = useContext(CartContext)
  const searchParams = useSearchParams()
  const router = useRouter()

  const [selectedItems, setSelectedItems] = useState([])
  const [addresses, setAddresses] = useState([])
  const [selectedAddressId, setSelectedAddressId] = useState("")
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    note: "",
    shippingMethod: "standard"
  })
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [loadingAddresses, setLoadingAddresses] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Chuyển hướng nếu chưa đăng nhập
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login")
    }
  }, [user, authLoading, router])

  // Khởi tạo thông tin từ user
  useEffect(() => {
    if (user) {
      setShippingInfo((prev) => ({
        ...prev,
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phoneNumber || ""
      }))
    }
  }, [user])

  // Lấy danh sách địa chỉ
  useEffect(() => {
    if (user) {
      const fetchAddresses = async () => {
        try {
          setLoadingAddresses(true)
          const response = await getAddressesAPI()
          setAddresses(response.addresses || [])
          const defaultAddress = response.addresses.find((addr) => addr.isDefault)
          if (defaultAddress) {
            setSelectedAddressId(defaultAddress._id)
            setShippingInfo((prev) => ({
              ...prev,
              fullName: defaultAddress.recipientName,
              email: user.email || "",
              phone: defaultAddress.phoneNumber,
              address: defaultAddress.address
            }))
          }
        } catch (err) {
          toast.error(err.message || "Không thể tải danh sách địa chỉ")
        } finally {
          setLoadingAddresses(false)
        }
      }
      fetchAddresses()
    }
  }, [user])

  // Lấy selectedItems từ query params
  useEffect(() => {
    const items = searchParams.get("selectedItems")
    if (items) {
      try {
        setSelectedItems(JSON.parse(decodeURIComponent(items)))
      } catch (err) {
        toast.error("Dữ liệu sản phẩm không hợp lệ")
        router.push("/cart")
      }
    } else {
      toast.error("Không có sản phẩm nào được chọn")
      router.push("/cart")
    }
  }, [searchParams, router])

  if (authLoading) {
    return <div>Đang tải...</div>
  }

  if (!user) {
    return null
  }

  const selectedCartItems = cart.items.filter((item) =>
    selectedItems.includes(item.productId._id)
  )

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + "₫"
  }

  const calculateItemsTotal = () => {
    return selectedCartItems.reduce(
      (total, item) => total + item.productId.price * item.quantity,
      0
    )
  }

  // Tính phí vận chuyển dựa trên khu vực
  const calculateShippingFee = (method = shippingInfo.shippingMethod) => {
    const getCityFromAddress = (address) => {
      return CITIES.find(city => address.toLowerCase().includes(city.toLowerCase())) || 'default'
    }

    const city = getCityFromAddress(shippingInfo.address)
    const { baseFee, distance, rate } = SHIPPING_RATES[city]
    let shippingFee = baseFee + distance * rate
    if (method === "express") {
      shippingFee *= 1.5
    }
    return shippingFee
  }

  const calculateTotal = () => {
    return calculateItemsTotal() + calculateShippingFee()
  }

  const handleAddressChange = (e) => {
    const addressId = e.target.value
    setSelectedAddressId(addressId)
    const selectedAddress = addresses.find((addr) => addr._id === addressId)
    if (selectedAddress) {
      setShippingInfo((prev) => ({
        ...prev,
        fullName: selectedAddress.recipientName,
        email: user.email || "",
        phone: selectedAddress.phoneNumber,
        address: selectedAddress.address
      }))
    } else {
      setShippingInfo((prev) => ({
        ...prev,
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phoneNumber || "",
        address: ""
      }))
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = async () => {
    if (
      !shippingInfo.fullName ||
      !shippingInfo.email ||
      !shippingInfo.phone ||
      !shippingInfo.address ||
      !shippingInfo.shippingMethod
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc")
      return
    }

    setIsSubmitting(true)
    try {
      const shippingFee = calculateShippingFee()
      const orderData = {
        userId: user._id,
        items: selectedCartItems.map((item) => ({
          productId: item.productId._id,
          quantity: item.quantity,
          price: item.productId.price
        })),
        shippingInfo: {
          fullName: shippingInfo.fullName,
          email: shippingInfo.email,
          phone: shippingInfo.phone,
          address: shippingInfo.address,
          note: shippingInfo.note,
          shippingMethod: shippingInfo.shippingMethod
        },
        paymentMethod,
        shippingFee,
        total: calculateTotal()
      }

      const response = await createOrderAPI(orderData)

      // Xóa các sản phẩm được đặt khỏi giỏ hàng
      for (const item of selectedCartItems) {
        await deleteCartItemAPI(item.productId._id)
      }
      await fetchCart()

      toast.success("Đặt hàng thành công!")
      router.push('/')
    } catch (err) {
      if (err.message.includes('Tổng tiền không khớp')) {
        toast.error('Tổng tiền không hợp lệ, vui lòng thử lại')
      } else if (err.message.includes('Thiếu thông tin')) {
        toast.error('Vui lòng kiểm tra thông tin đơn hàng')
      } else {
        toast.error(err.message || 'Không thể tạo đơn hàng')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-wrapper">
      <div className="checkoutPage">
        <div className="container">
          {selectedCartItems.length === 0 ? (
            <div className="emptyCheckout">
              <p style={{ margin: "15px 0" }}>
                Không có sản phẩm nào được chọn.
              </p>
              <Link href="/cart" className="btnBackToCart">
                Quay lại giỏ hàng
              </Link>
            </div>
          ) : (
            <div className="checkoutContainer">
              <div className="checkoutLeft">
                <div className="customerInfo">
                  <h2>Thông tin khách hàng</h2>
                  <div className="formGroup">
                    <label>
                      Họ và tên <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <label>
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleInputChange}
                      placeholder="Nhập email"
                      required
                      disabled
                    />
                  </div>
                  <div className="formGroup">
                    <label>
                      Số điện thoại <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleInputChange}
                      placeholder="Nhập số điện thoại"
                      required
                    />
                  </div>
                </div>
                <div className="shippingInfo">
                  <h2>Thông tin giao hàng</h2>
                  <div className="formGroup">
                    <label>Chọn địa chỉ</label>
                    <select
                      value={selectedAddressId}
                      onChange={handleAddressChange}
                      disabled={loadingAddresses}
                    >
                      <option value="">Nhập địa chỉ mới</option>
                      {addresses.map((addr) => (
                        <option key={addr._id} value={addr._id}>
                          {addr.recipientName}, {addr.phoneNumber}, {addr.address}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="formGroup">
                    <label>
                      Địa chỉ <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleInputChange}
                      placeholder="Nhập địa chỉ giao hàng"
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <label>
                      Phương thức giao hàng <span>*</span>
                    </label>
                    <select
                      name="shippingMethod"
                      value={shippingInfo.shippingMethod}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="standard">Giao hàng tiêu chuẩn</option>
                      <option value="express">Giao hàng nhanh</option>
                    </select>
                  </div>
                  <div className="formGroup">
                    <label>Ghi chú</label>
                    <textarea
                      name="note"
                      value={shippingInfo.note}
                      onChange={handleInputChange}
                      placeholder="Ghi chú cho đơn hàng (nếu có)"
                    />
                  </div>
                </div>
              </div>
              <div className="checkoutRight">
                <div className="orderSummary">
                  <h2>Đơn hàng của bạn</h2>
                  <table className="orderTable">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCartItems.map((item) => (
                        <tr key={item.productId._id}>
                          <td>
                            <div className="orderProduct">
                              <img
                                src={item.productId.img[0] || "/img/placeholder.jpg"}
                                alt={item.productId.productName}
                                className="orderProductImage"
                              />
                              <span>
                                {item.productId.productName} × {item.quantity}
                              </span>
                            </div>
                          </td>
                          <td>{formatPrice(item.productId.price * item.quantity)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="orderTotal">
                    <p>
                      <strong>Tạm tính:</strong> {formatPrice(calculateItemsTotal())}
                    </p>
                    <p>
                      <strong>Phí vận chuyển:</strong> {formatPrice(calculateShippingFee())}
                    </p>
                    <p>
                      <strong>Tổng cộng:</strong> {formatPrice(calculateTotal())}
                    </p>
                  </div>
                </div>
                <div className="paymentMethod">
                  <h2>Phương thức thanh toán</h2>
                  <div className="paymentOption">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <label htmlFor="cod">Thanh toán khi nhận hàng (COD)</label>
                  </div>
                  <div className="paymentOption">
                    <input
                      type="radio"
                      id="bank"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={() => setPaymentMethod("bank")}
                    />
                    <label htmlFor="bank">Chuyển khoản ngân hàng</label>
                  </div>
                </div>
                <button className="btnPlaceOrder" onClick={handlePlaceOrder}>
                  Hoàn tất đơn hàng
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer theme="colored" autoClose={2000} />
    </div>
  )
}