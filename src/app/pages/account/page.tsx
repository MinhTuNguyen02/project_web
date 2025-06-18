"use client"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/app/contexts/AuthContext"
import Link from "next/link"
import { ToastContainer, toast } from "react-toastify"
import { fetchUserInfoAPI, getAddressesAPI, updateUserInfoAPI } from "@/app/api"
import styles from "@/app/page.module.css"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import "./account.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Address } from "@/app/types"

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Info />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function Info() {
  const { user, loading, logout, setUser } = useContext(AuthContext)
  const [addresses, setAddresses] = useState<Address[]>([])
  const [addressLoading, setAddressLoading] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [fullName, setFullName] = useState(user?.fullName || "")
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "")
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/pages/login")
    } else if (user) {
      setFullName(user.fullName)
      setPhoneNumber(user.phoneNumber)
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      const fetchAddresses = async () => {
        try {
          setAddressLoading(true)
          const response = await getAddressesAPI()
          setAddresses(response.addresses || [])
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message || 'Không thể tải địa chỉ')
          } else {
            toast.error('Không thể tải địa chỉ')
          }
        } finally {
          setAddressLoading(false)
        }
      }
      fetchAddresses()
    }
  }, [user])

  const handleUpdateInfo = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
      setError(null)
      const response = await updateUserInfoAPI({ fullName, phoneNumber })
      if (response.user) {
        setUser(response.user) 
      } else {
        const updatedUser = await fetchUserInfoAPI(localStorage.getItem('token') || '')
        setUser(updatedUser.user) 
      }
      toast.success("Cập nhật thành công")
      setEditMode(false)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || 'Không thể cập nhật thông tin')
      } else {
        toast.error('Không thể cập nhật thông tin')
      }
    }
  }


  if (loading) {
    return <h2 style={{ justifySelf: "center" }}>Đang tải...</h2>
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/pages/login")
  }

  const tmp = user.fullName.split(' ')
  let name = ''
  if (tmp.length === 1) {
    name = tmp[0]
  } else {
    name = tmp[tmp.length - 1] + ' ' + tmp[0]
  }

  const defaultAddress = addresses.find(addr => addr.isDefault)

  return (
    <div>
      <div className="acc-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>Trang khách hàng</span>
        </div>
        <h1 className="banner-title">TRANG KHÁCH HÀNG</h1>
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
                  <li><Link href="#" onClick={handleLogout}>Đăng xuất</Link></li>
                </ul>
              </div>
            </div>
            <div className="acc-content-right">
              <h1>Thông tin tài khoản</h1>
              <div className="acc-detail">
                <p><strong>Họ tên: </strong>
                  {editMode ? (
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  ) : (
                    user.fullName
                  )}
                </p>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Điện thoại: </strong>
                  {editMode ? (
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      pattern="[0-9]{10}"
                      placeholder="Nhập số điện thoại 10 số"
                    />
                  ) : (
                    user.phoneNumber
                  )}
                </p>
                <p><strong>Địa chỉ: </strong>
                  {addressLoading ? (
                    'Đang tải địa chỉ...'
                  ) : defaultAddress ? (
                    `${defaultAddress.recipientName}, ${defaultAddress.phoneNumber}, ${defaultAddress.address}`
                  ) : (
                    'Chưa có địa chỉ mặc định'
                  )}
                </p>
                {editMode ? (
                  <div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" onClick={handleUpdateInfo}>Lưu thay đổi</button>
                    <button type="button" onClick={() => setEditMode(false)}>Hủy</button>
                  </div>
                ) : (
                  <button onClick={() => setEditMode(true)}>Chỉnh sửa thông tin</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}