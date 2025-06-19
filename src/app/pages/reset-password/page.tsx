"use client"
import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import { resetPasswordAPI } from "@/app/api"
import "../login/login_css.css"

export default function ResetPasswordPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPassword />
      </Suspense>
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </>
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
      router.push("/pages/login")
    }
    const isResetDone = localStorage.getItem(`resetDone_${token}`)
    if (isResetDone) {
      toast.error("Liên kết này đã được sử dụng. Vui lòng đăng nhập.")
      router.push("/pages/login")
    }
  }, [token, router])

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
      localStorage.setItem(`resetDone_${token}`, "true")
      toast.success("Đặt lại mật khẩu thành công! Vui lòng đăng nhập.")
      router.push("/pages/login")
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Đặt lại mật khẩu thất bại")
      } else {
        toast.error("Đặt lại mật khẩu thất bại")
      }
    }
  }

  return (
    <div className="page_login">
      <div className="login-banner">
        <div className="breadcrumb">
          <span>Đặt lại mật khẩu</span>
        </div>
        <h1 className="banner-title">ĐẶT LẠI MẬT KHẨU</h1>
      </div>
      <div className="container-login">
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
            <button type="submit" className="btn-login">
              ĐẶT LẠI MẬT KHẨU
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}