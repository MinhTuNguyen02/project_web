/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState } from "react"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import Link from "next/link"
import { toast, ToastContainer } from 'react-toastify'
import { sendMessageAPI } from '@/app/api/index'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-toastify/dist/ReactToastify.css'
import "./contact_css.css"

export default function ContactPage() {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000} />
    </div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    content: ''
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await sendMessageAPI({
        ...formData,
        type: 'contact'
      })
      toast.success('Tin nhắn đã được gửi thành công!')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        content: ''
      })
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Không thể gửi tin nhắn")
      } else {
        toast.error("Không thể gửi tin nhắn")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="news-banner">
        <div className="breadcrumb">
          <span><Link href="/">Trang chủ</Link></span>
          <span className="separator">/</span>
          <span>Liên hệ</span>
        </div>
        <h1 className="banner-title">LIÊN HỆ</h1>
      </div>
      <section className="contact">
        <div className="contact-container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps?q=97+Đ.+Man+Thiện,+Hiệp+Phú,+Thủ+Đức,+Hồ+Chí+Minh&output=embed"
              width="50%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              title="Google Maps"
            ></iframe>
          </div>
          <div className="contact-form">
            <h2>LIÊN HỆ CHÚNG TÔI</h2>
            <p>
              Để liên hệ và nhận các thông tin khuyến mãi sớm nhất, chúng tôi sẽ
              liên lạc với bạn trong thời gian sớm nhất!
            </p>
            <form onSubmit={handleSubmit}>
              <label>Họ và tên*</label>
              <input
                type="text"
                name="fullName"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Nhập địa chỉ Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Điện thoại*</label>
              <input
                type="tel"
                name="phone"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <label>Nội dung</label>
              <textarea
                name="content"
                placeholder="Nhập nội dung liên hệ"
                value={formData.content}
                onChange={handleInputChange}
              ></textarea>
              <button type="submit" disabled={loading}>
                {loading ? 'Đang gửi...' : 'GỬI LIÊN HỆ NGAY'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}