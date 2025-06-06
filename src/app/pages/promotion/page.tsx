"use client"
import { useState, useEffect } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css'
import styles from "@/app/page.module.css"
import "./promotion.css"
import { clsx } from "clsx"
import Link from "next/link"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import { fetchPromotionsAPI } from "@/app/api"
import { Promotion } from "@/app/types"

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Promotion_Content />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000} />
    </div>
  )
}

function Promotion_Content() {
  const [promotions, setPromotions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const data = await fetchPromotionsAPI(true) // Chỉ lấy khuyến mãi đang hoạt động
        setPromotions(data.promotions || [])
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message || "Không thể tải danh sách khuyến mãi")
        } else {
          toast.error("Không thể tải danh sách khuyến mãi")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchPromotions()
  }, [])

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      toast.success(`Đã sao chép mã: ${code}`)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Không thể sao chép mã")
      } else {
        toast.error("Không thể sao chép mã")
      }
    }
  }

  const formatDate = (date: number) => {
    return new Date(date).toLocaleDateString('vi-VN')
  }

  const formatType = (type: string) => {
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

  const formatValue = (type: string, value:number) => {
    if (type === 'percentage') return `${value}%`
    if (type === 'fixed') return `${value.toLocaleString('vi-VN')}đ`
    return 'Miễn phí'
  }

  if (loading) {
    return <div className={"loading"}>Đang tải khuyến mãi...</div>
  }

  return (
    <div className={"promotionContainer"}>
      <div className="promo-banner">
        <div className="breadcrumb">
          <span><Link href="/">Trang chủ</Link></span>
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
          {promotions.map((promotion: Promotion) => (
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