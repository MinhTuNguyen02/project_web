"use client"
import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastContainer, toast } from "react-toastify"
import { changePasswordAPI, getAddressesAPI } from "../../api"
import Link from "next/link"
import styles from "../../page.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "../account.css"
import "./changePass.css"
import Header from "@/app/component/Header"
import Footer from "@/app/component/Footer"

export default function Home() {
  return (
    <div className={styles.main}>
    <Header/>
    <ChangePassword/>
    <Footer/>
    <ToastContainer theme="colored" autoClose={2000} />
    </div>
  )
}

function ChangePassword(){
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()
  const [addresses, setAddresses] = useState([])
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
      if (user) {
        const fetchAddresses = async () => {
          try {
            const response = await getAddressesAPI()
            setAddresses(response.addresses || [])
          } catch (error) {
            alert(error.message || 'Failed to fetch addresses')
          }
        }
        fetchAddresses()
      }
    }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.oldPassword) newErrors.oldPassword = "Vui lòng nhập mật khẩu cũ"
    if (!formData.newPassword) newErrors.newPassword = "Vui lòng nhập mật khẩu mới"
    else if (formData.newPassword.length < 6) newErrors.newPassword = "Mật khẩu mới phải có ít nhất 6 ký tự"
    if (!formData.confirmPassword) newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu mới"
    else if (formData.newPassword !== formData.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp"
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      await changePasswordAPI({
        email: user.email,
        oldPassword: formData.oldPassword,
        newPassword: formData.newPassword,
      })
      toast.success("Đổi mật khẩu thành công")
      setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" })
      setTimeout(() => router.push("/account"), 2000)
    } catch (err) {
      toast.error(err.message || "Không thể đổi mật khẩu")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return <h2 style={{ justifySelf: "center" }}>Đang tải...</h2>
  }

  if (!user) {
    return null
  }
  const tmp=user.fullName.split(' ')
  const name=tmp[tmp.length-1]+' '+tmp[0]

  return(
    <div>
      <div className="acc-banner">
        <div className="breadcrumb">
            <span>
              <Link href="/">Trang chủ</Link>
            </span>
            <span className="separator">/</span>
            <span>
              <Link href="/account">Trang khách hàng</Link>
            </span>
            <span className="separator">/</span>
            <span>Đổi mật khẩu</span>
        </div>
        <h1 className="banner-title">Đổi mật khẩu</h1>
      </div>

      <div className="page-cus-acc">
        <div className="acc-container">
          <div className="acc-content">
            <div className="acc-content-left">
              <div className="block-acc">
                <h5>TRANG TÀI KHOẢN</h5>
                <p>Xin chào, {name}!</p>                
                <ul>
                  <li><Link href="/account">Thông tin tài khoản</Link></li>
                  <li><Link href="/account/orders">Đơn hàng của bạn</Link></li>
                  <li><Link href="/account/changePassword">Đổi mật khẩu</Link></li>
                  <li><Link href="/account/addresses">Sổ địa chỉ ({addresses.length})</Link></li>
                </ul>
              </div>
            </div>

            <div className="acc-content-right">
                <div className="cp-container">
                  <h2>Đổi mật khẩu</h2>
                  <form onSubmit={handleSubmit} className="cp-form">
                    <div className="form-group">
                      <label htmlFor="oldPassword">Mật khẩu cũ</label>
                      <input
                        type="password"
                        id="oldPassword"
                        name="oldPassword"
                        value={formData.oldPassword}
                        onChange={handleChange}
                        placeholder="Mật khẩu cũ"
                        className={errors.oldPassword ? "input-error" : ""}
                      />
                      {errors.oldPassword && <span className="error">{errors.oldPassword}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="newPassword">Mật khẩu mới</label>
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        placeholder="Mật khẩu mới"
                        className={errors.newPassword ? "input-error" : ""}
                      />
                      {errors.newPassword && <span className="error">{errors.newPassword}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Xác nhận lại mật khẩu"
                        className={errors.confirmPassword ? "input-error" : ""}
                      />
                      {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    </div>
                    <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Đang xử lý..." : "Đổi mật khẩu"}
                    </button>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}