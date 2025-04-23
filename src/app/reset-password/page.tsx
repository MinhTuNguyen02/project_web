"use client"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "../resetCss.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Header from "../component/Header"
import Footer from "../component/Footer"
import { resetPasswordAPI } from "../api"
import "../login/login_css.css"

export default function ResetPasswordPage() {
  return (
    <div>
      <Header />
      <ResetPassword />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function ResetPassword() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  useEffect(() => {
    if (!token) {
      toast.error("Liên kết không hợp lệ")
      router.push("/login")
    }
  }, [token, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự")
      return
    }
    if (password !== confirmPassword) {
      toast.error("Mật khẩu không khớp")
      return
    }
    try {
      await resetPasswordAPI(token, password)
      toast.success("Đặt lại mật khẩu thành công! Vui lòng đăng nhập.")
      router.push("/login")
    } catch (err) {
      toast.error(err.message || "Đặt lại mật khẩu thất bại")
    }
  }

  return (
    <div className="page_login">
      <div className="container-login">
        <div className="news-banner">
          <div className="breadcrumb">
            <span>Trang chủ </span>
            <span className="separator">/</span>
            <span>Đặt lại mật khẩu</span>
          </div>
          <h1 className="banner-title">ĐẶT LẠI MẬT KHẨU</h1>
        </div>
        <div className="account-box-shadow">
          <form className="form-signup" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Mật khẩu mới<span>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập Mật khẩu mới"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <div className="form-group">
              <label>
                Nhập lại mật khẩu<span>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <button type="submit" className="btn-radius">
              ĐẶT LẠI MẬT KHẨU
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}