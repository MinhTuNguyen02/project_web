"use client"; // Đặt dòng này trên cùng để làm Client Component
import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./contact_css.css";
import { useRouter } from "next/navigation"; // Đổi từ "next/router" -> "next/navigation"

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Content */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

// Component Banner (Client Component)
function Banner() {
  const router = useRouter(); // Hook để điều hướng

  return (
    <div className="banner">
      <div className="breadcrumb">
        <span
          onClick={() => router.push("/")}
          className="breadcrumb-link"
        >
          Trang chủ
        </span>{" "}
        / <span className="highlight">Liên hệ</span>
      </div>
      <h1>LIÊN HỆ</h1>
    </div>
  );
}

function Contact() {
  return (
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
          <form>
            <label>Họ và tên*</label>
            <input type="text" placeholder="Nhập họ và tên" required />
            <label>Email*</label>
            <input type="email" placeholder="Nhập địa chỉ Email" required />
            <label>Điện thoại*</label>
            <input type="tel" placeholder="Nhập số điện thoại" required />
            <label>Nội dung</label>
            <textarea placeholder="Nhập nội dung liên hệ"></textarea>
            <button type="submit">GỬI LIÊN HỆ NGAY</button>
          </form>
        </div>
      </div>
    </section>
  );
}
