/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useContext, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { CartContext } from "@/app/contexts/cartContext"
import { AuthContext } from "@/app/contexts/AuthContext"
import { toast, ToastContainer } from "react-toastify"
import { createOrderAPI, getAddressesAPI, deleteCartItemAPI, validatePromotionAPI } from "@/app/api"
import { CITIES, SHIPPING_RATES } from "../../../../untils/constant"
import type { Address, productCart } from "@/app/types"
import "./checkout.css"

export default function CheckoutPage() {
  const { user, loading: authLoading } = useContext(AuthContext)
  const { cart, fetchCart } = useContext(CartContext)
  const searchParams = useSearchParams()
  const router = useRouter()

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [addresses, setAddresses] = useState<Address[]>([])
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
  const [promotionCode, setPromotionCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [isFreeShipping, setIsFreeShipping] = useState(false)
  const [loadingAddresses, setLoadingAddresses] = useState(true)
  const [loadingPromotion, setLoadingPromotion] = useState(false)

  // Chuyển hướng nếu chưa đăng nhập
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/pages/login")
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
          const defaultAddress = response.addresses.find((addr: Address) => addr.isDefault)
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
          toast.error(err instanceof Error ? err.message : "Không thể tải danh sách địa chỉ")
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
        toast.error(err instanceof Error ? err.message : "Dữ liệu sản phẩm không hợp lệ")
        router.push("/pages/cart")
      }
    } else {
      toast.error("Không có sản phẩm nào được chọn")
      router.push("/pages/cart")
    }
  }, [searchParams, router])

  if (authLoading) {
    return <div>Đang tải...</div>
  }

  if (!user) {
    return null
  }

  const selectedCartItems = cart.items.filter((item: productCart) =>
    selectedItems.includes(item.productId._id)
  )

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "₫"
  }

  const calculateItemsTotal = () => {
    return selectedCartItems.reduce(
      (total: number, item: productCart) => total + item.productId.price * item.quantity,
      0
    )
  }

  // Tính phí vận chuyển
  const calculateShippingFee = (method = shippingInfo.shippingMethod) => {
    if (isFreeShipping) {
      return 0
    }
    const getCityFromAddress = (address: string) => {
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

  // Tính tổng tiền
  const calculateTotal = () => {
    return calculateItemsTotal() + calculateShippingFee() - discount
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const addressId = e.target.value
    setSelectedAddressId(addressId)
    const selectedAddress = addresses.find((addr: Address) => addr._id === addressId)
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
  }

  // Xử lý áp dụng mã khuyến mãi
  const handleApplyPromotion = async () => {
    if (!promotionCode) {
      toast.error("Vui lòng nhập mã khuyến mãi")
      return
    }
  
    try {
      setLoadingPromotion(true)
      const response = await validatePromotionAPI({
        code: promotionCode,
        itemsTotal: calculateItemsTotal(),
        userId: user._id
      })
      setDiscount(response.discount || 0)
      setIsFreeShipping(response.promotion.type === "free_shipping")
      if (response.promotion.type === "free_shipping") {
        setShippingInfo((prev) => ({ ...prev, shippingMethod: "standard" }))
        toast.success("Miễn phí vận chuyển đã được áp dụng!")
      } else {
        toast.success(`Mã ${promotionCode} áp dụng thành công! Giảm ${formatPrice(response.discount)}`)
      }
    } catch (err) {
      setDiscount(0)
      setIsFreeShipping(false)
      toast.error(err instanceof Error ? err.message : "Mã khuyến mãi không hợp lệ")
    } finally {
      setLoadingPromotion(false)
    }
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
  
    try {
      const shippingFee = calculateShippingFee()
      const orderData = {
        userId: user._id,
        items: selectedCartItems.map((item: productCart) => ({
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
        total: calculateTotal(),
        promotion: promotionCode ? { code: promotionCode.toUpperCase(), discount } : undefined
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
      const message = err instanceof Error ? err.message : "Không thể tạo đơn hàng"
      if (message.includes('Tổng tiền không khớp')) {
        toast.error('Tổng tiền không hợp lệ, vui lòng thử lại')
      } else if (message.includes('Thiếu thông tin')) {
        toast.error('Vui lòng kiểm tra thông tin đơn hàng')
      } else {
        toast.error(message)
      }
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
              <Link href="/pages/cart" className="btnBackToCart">
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
                      {addresses.map((addr: Address) => (
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
                      onChange={handleShippingMethodChange}
                      required
                      disabled={isFreeShipping}
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
                  <div className="formGroup">
                    <label>Mã khuyến mãi</label>
                    <div className="promotionInput">
                      <input
                        type="text"
                        value={promotionCode}
                        onChange={(e) => setPromotionCode(e.target.value)}
                        placeholder="Nhập mã khuyến mãi"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromotion}
                        disabled={loadingPromotion}
                      >
                        {loadingPromotion ? "Đang kiểm tra..." : "Áp dụng"}
                      </button>
                    </div>
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
                      {selectedCartItems.map((item: productCart) => (
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
                    {discount > 0 && (
                      <p>
                        <strong>Giảm giá:</strong> -{formatPrice(discount)}
                      </p>
                    )}
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