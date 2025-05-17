"use client"
import { useState, useEffect } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import styles from "../page.module.css"
import "./promotion.css"
import { clsx } from "clsx"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "../component/Header"
import Footer from "../component/Footer"
import { fetchPromotionsAPI } from "../api"

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Promotion />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000} />
    </div>
  )
}

function Promotion() {
  const [promotions, setPromotions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const data = await fetchPromotionsAPI(true) // Chỉ lấy khuyến mãi đang hoạt động
        setPromotions(data.promotions || [])
      } catch (err) {
        setError(err.message || 'Không thể tải danh sách khuyến mãi')
        toast.error(err.message || 'Không thể tải danh sách khuyến mãi')
      } finally {
        setLoading(false)
      }
    }
    fetchPromotions()
  }, [])

  const handleCopyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code)
      toast.success(`Đã sao chép mã: ${code}`)
    } catch (err) {
      toast.error('Không thể sao chép mã')
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('vi-VN')
  }

  const formatType = (type) => {
    switch (type) {
      case 'fixed':
        return 'Giảm giá cố định'
      case 'percentage':
        return 'Giảm giá phần trăm'
      case 'free_shipping':
        return 'Miễn phí vận chuyển'
      default:
        return type
    }
  }

  const formatValue = (type, value) => {
    if (type === 'percentage') return `${value}%`
    if (type === 'fixed') return `${value.toLocaleString('vi-VN')}đ`
    return 'Miễn phí'
  }

  if (loading) {
    return <div className={"loading"}>Đang tải khuyến mãi...</div>
  }

  if (error) {
    return <div className={"error"}>{error}</div>
  }

  return (
    <div className={"promotionContainer"}>
      <div className="promo-banner">
        <div className="breadcrumb">
          <span>Trang chủ </span>
          <span className="separator">/</span>
          <span>Trang khuyến mãi</span>
        </div>
        <h1 className="banner-title">Trang khuyến mãi</h1>
      </div>
      <h2 className={"promotionTitle"}>Khuyến mãi hiện có</h2>
      {promotions.length === 0 ? (
        <p className={"noPromotions"}>Hiện tại không có khuyến mãi nào.</p>
      ) : (
        <div className={"promotionList"}>
          {promotions.map((promotion) => (
            <div key={promotion._id} className={clsx("promotionCard", 'promo-content')}>
              <div className="promoCode">
                <strong>Mã: </strong>
                <span>{promotion.code}</span>
              </div>
              <div className="promoType">
                <strong>Loại: </strong>
                <span>{formatType(promotion.type)}</span>
              </div>
              <div className="promoValue">
                <strong>Giá trị: </strong>
                <span>{formatValue(promotion.type, promotion.value)}</span>
              </div>
              <div className="promoMinOrder">
                <strong>Đơn tối thiểu: </strong>
                <span>{promotion.minOrderValue.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="promoStartDate">
                <strong>Bắt đầu: </strong>
                <span>{formatDate(promotion.startDate)}</span>
              </div>
              <div className="promoEndDate">
                <strong>Kết thúc: </strong>
                <span>{formatDate(promotion.endDate)}</span>
              </div>
              <div className="promoUsedCount">
                <strong>Đã dùng: </strong>
                <span>{promotion.usedCount}/{promotion.maxUses || '∞'}</span>
              </div>
              <div className="promoAction">
                <button
                  className={"copyButton"}
                  onClick={() => handleCopyCode(promotion.code)}
                >
                  Sao chép mã
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}