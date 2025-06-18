"use client"
import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/app/contexts/AuthContext"
import { ToastContainer, toast } from "react-toastify"
import { changePasswordAPI, getAddressesAPI } from "@/app/api"
import { PasswordField } from "@/app/types"
import Link from "next/link"
import styles from "@/app/page.module.css"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "../account.css"
import "./changePass.css"

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
  const [errors, setErrors] = useState({oldPassword: '', newPassword: '', confirmPassword: ''})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  })

  useEffect(() => {
    if (!loading && !user) {
      router.push("/pages/login")
    }
  }, [user, loading, router])

  useEffect(() => {
      if (user) {
        const fetchAddresses = async () => {
          try {
            const response = await getAddressesAPI()
            setAddresses(response.addresses || [])
          } catch (err) {
            if (err instanceof Error) {
              toast.error(err.message || 'Không thể tải danh sách địa chỉ')
            } else {
              toast.error('Không thể tải danh sách địa chỉ')
            }
          }
        }
        fetchAddresses()
      }
    }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const validateForm = () => {
    const newErrors = {oldPassword: '', newPassword: '', confirmPassword: ''}
    if (!formData.oldPassword) newErrors.oldPassword = "Vui lòng nhập mật khẩu cũ"
    if (!formData.newPassword) newErrors.newPassword = "Vui lòng nhập mật khẩu mới"
    else if (formData.newPassword.length < 6) newErrors.newPassword = "Mật khẩu mới phải có ít nhất 6 ký tự"
    if (!formData.confirmPassword) newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu mới"
    else if (formData.newPassword !== formData.confirmPassword)
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp"
    return newErrors
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      return;
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
      setTimeout(() => router.push("/pages/account"), 2000)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Không thể đổi mật khẩu")
      } else {
        toast.error("Không thể đổi mật khẩu")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return <h2 style={{ justifySelf: "center" }}>Đang tải...</h2>
  }

  const togglePasswordVisibility = (field: PasswordField) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }))
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
              <Link href="/pages/account">Trang khách hàng</Link>
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
                  <li><Link href="/pages/account">Thông tin tài khoản</Link></li>
                  <li><Link href="/pages/account/orders">Đơn hàng của bạn</Link></li>
                  <li><Link href="/pages/account/changePassword">Đổi mật khẩu</Link></li>
                  <li><Link href="/pages/account/addresses">Sổ địa chỉ ({addresses.length})</Link></li>
                </ul>
              </div>
            </div>

            <div className="acc-content-right">
              <div className="cp-container">
                <h2>Đổi mật khẩu</h2>
                <form onSubmit={handleSubmit} className="cp-form">
                  <div className="form-group">
                    <label htmlFor="oldPassword">Mật khẩu cũ</label>
                    <div className="password-input">
                      <input
                        type={showPassword.oldPassword ? "text" : "password"}
                        id="oldPassword"
                        name="oldPassword"
                        value={formData.oldPassword}
                        onChange={handleChange}
                        placeholder="Mật khẩu cũ"
                        className={errors.oldPassword ? "input-error" : ""}
                      />
                      <span
                        className="password-toggle"
                        onClick={() => togglePasswordVisibility("oldPassword")}
                      >
                        <i
                          className={`fas ${showPassword.oldPassword ? "fa-eye-slash" : "fa-eye"}`}
                        ></i>
                      </span>
                    </div>
                    {errors.oldPassword && <span className="error">{errors.oldPassword}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="newPassword">Mật khẩu mới</label>
                    <div className="password-input">
                    <input
                        type={showPassword.newPassword ? "text" : "password"}
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        placeholder="Mật khẩu mới"
                        className={errors.newPassword ? "input-error" : ""}
                      />
                      <span
                        className="password-toggle"
                        onClick={() => togglePasswordVisibility("newPassword")}
                      >
                        <i
                          className={`fas ${showPassword.newPassword ? "fa-eye-slash" : "fa-eye"}`}
                        ></i>
                      </span>
                    </div>
                    {errors.newPassword && <span className="error">{errors.newPassword}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
                    <div className="password-input">
                      <input
                        type={showPassword.confirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Xác nhận lại mật khẩu"
                        className={errors.confirmPassword ? "input-error" : ""}
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