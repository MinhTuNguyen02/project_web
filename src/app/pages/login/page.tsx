"use client"
import "@fortawesome/fontawesome-free/css/all.min.css"
import React, { useState, useContext, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { AuthContext } from "@/app/contexts/AuthContext"
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import { forgotPasswordAPI } from "@/app/api"
import Link from "next/link"
import 'react-toastify/dist/ReactToastify.css'
import "./login_css.css"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import { PasswordFieldLogin } from "@/app/types"

export default function LoginPage() {
  const { loading } = useContext(AuthContext)

  if (loading) {
    return <div>Đang tải...</div>
  }
  return (
    <div>
      <Header />
      <Login />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function Login() {
  const searchParams = useSearchParams()
  const chosenTabQuery = searchParams.get("tab") || "login"
  const { login, register } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState(chosenTabQuery)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotEmail, setForgotEmail] = useState("")
  const [showPassword, setShowPassword] = useState({
    loginPassword: false,
    signinPassword: false,
    confirmPassword: false,
  })

  const handleTabChange = (tab: "login" | "register") => {
    setActiveTab(tab)
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setFullName("")
    setPhoneNumber("")
    setShowForgotPassword(false)
    setShowPassword({loginPassword: false,
      signinPassword: false,
      confirmPassword: false,})
  }

  useEffect(() => {
    setActiveTab(chosenTabQuery)
  }, [chosenTabQuery])

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error("Email không hợp lệ")
      return
    }
    try {
      await login(email, password)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Đăng nhập thất bại")
      } else {
        toast.error("Đăng nhập thất bại")
      }
    }
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error("Email không hợp lệ")
      return
    }
    if (password.length < 6) {
      toast.error("Mật khẩu phải có ít nhất 6 ký tự")
      return
    }
    if (password !== confirmPassword) {
      toast.error("Mật khẩu không khớp")
      return
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error("Số điện thoại phải là 10 chữ số")
      return
    }
    try {
      await register(email, password, fullName, phoneNumber)
      setActiveTab("login")
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Đăng ký thất bại")
      } else {
        toast.error("Đăng ký thất bại")
      }
    }
  }

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(forgotEmail)) {
      toast.error("Email không hợp lệ")
      return
    }
    try {
      await forgotPasswordAPI(forgotEmail)
      toast.success("Email đặt lại mật khẩu đã được gửi!")
      setShowForgotPassword(false)
      setForgotEmail("")
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Gửi yêu cầu thất bại")
      } else {
        toast.error("Gửi yêu cầu thất bại")
      }
    }
  }

  const togglePasswordVisibility = (field: PasswordFieldLogin) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }))
  }
  return (
    <div className="page_login">
      <div className="login-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>Đăng nhập tài khoản</span>
        </div>
        <h1 className="banner-title">ĐĂNG NHẬP TÀI KHOẢN</h1>
      </div>
      <div className="container-login">
        <div className="account-box-shadow">
          {/* Tabs */}
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabChange("login")}
            >
              Đăng nhập
            </button>
            <button
              className={`auth-tab ${activeTab === "register" ? "active" : ""}`}
              onClick={() => handleTabChange("register")}
            >
              Đăng ký
            </button>
          </div>

          {/* Form */}
          {activeTab === "login" && !showForgotPassword ? (
            <form className="form-signup" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập Địa chỉ Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Mật khẩu<span>*</span>
                </label>
                <div className="password-input">
                  <input
                    type={showPassword.loginPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Nhập Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={() => togglePasswordVisibility("loginPassword")}
                  >
                    <i
                      className={`fas ${showPassword.loginPassword ? "fa-eye-slash" : "fa-eye"}`}
                    ></i>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="forgot-password"
                onClick={() => setShowForgotPassword(true)}
              >
                Quên mật khẩu?
              </button>
              <button type="submit" className="btn-login">
                ĐĂNG NHẬP
              </button>
            </form>
          ) : activeTab === "login" && showForgotPassword ? (
            <form className="form-signup" onSubmit={handleForgotPasswordSubmit}>
              <div className="form-group">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập Địa chỉ Email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-login">
                  GỬI YÊU CẦU
                </button>
                <button
                  type="button"
                  className="btn-login"
                  onClick={() => setShowForgotPassword(false)}
                >
                  HỦY
                </button>
              </div>
            </form>
          ) : (
            <form className="form-signup" onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label>
                  Họ tên<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập Họ tên"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Số điện thoại<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập Số điện thoại"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập Địa chỉ Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Mật khẩu<span>*</span>
                </label>
                <div className="password-input">
                  <input
                    type={showPassword.signinPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Nhập Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <span
                    className="password-toggle"
                    onClick={() => togglePasswordVisibility("signinPassword")}
                  >
                    <i
                      className={`fas ${showPassword.signinPassword ? "fa-eye-slash" : "fa-eye"}`}
                    ></i>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Nhập lại mật khẩu<span>*</span>
                </label>
                <div className="password-input">
                  <input
                    type={showPassword.confirmPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <span
                    className="password-toggle"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    <i
                      className={`fas ${showPassword.confirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                    ></i>
                  </span>
                </div>
              </div>
              <button type="submit" className="btn-login">
                ĐĂNG KÝ
              </button>
            </form>
          )}

          <p className="privacy-text">
            Copyright © 2025 hehe company. All rights reserved.
          </p>

          {/* Social Login - tạm ẩn vì chưa tích hợp */}
          {/* <div className="social-login">
            <span>hoặc đăng nhập qua</span>
            <div className="social-buttons">
              <button className="btn-facebook">Facebook</button>
              <button className="btn-google">Google</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}