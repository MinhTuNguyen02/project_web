"use client"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/app/contexts/AuthContext"
import { Address } from "@/app/types"
import Link from "next/link"
import { getAddressesAPI } from "@/app/api"
import styles from "@/app/page.module.css"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import "./account.css"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home() {
  return (
    <div className={styles.main}>
    <Header/>
    <Info/>
    <Footer/>
    </div>
  )
}

function Info(){
  const { user, loading, logout } = useContext(AuthContext)
  const [addresses, setAddresses] = useState<Address[]>([])
  const [addressLoading, setAddressLoading] = useState(true)
  const [addressError, setAddressError] = useState<string | null>(null)
  const router = useRouter()
  
  useEffect(() => {
    if (!loading && !user) {
      router.push("/pages/login")
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
            setAddressError(error.message || 'Failed to fetch addresses')
          } else {
            setAddressError('Failed to fetch addresses')
          }
        } finally {
          setAddressLoading(false)
        }
      }
      fetchAddresses()
    }
  }, [user])

  if (loading) {
    return (
      <h2 style={{justifySelf:"center"}}>Đang tải...</h2>
    )
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/pages/login")
  }

  const tmp=user.fullName.split(' ')
  let name=''
  if (tmp.length==1) {
    name = tmp[0]
  } else {
    name=tmp[tmp.length-1]+' '+tmp[0]
  }

  const defaultAddress = addresses.find(addr => addr.isDefault)
  return(
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
                <p><strong>Họ tên: </strong>{user.fullName}</p>
                <p><strong>Email: </strong>{user.email}</p>
                <p><strong>Điện thoại: </strong>{user.phoneNumber}</p>
                <p><strong>Địa chỉ: </strong>
                  {addressLoading ? (
                    'Đang tải địa chỉ...'
                  ) : addressError ? (
                    'Lỗi khi tải địa chỉ'
                  ) : defaultAddress ? (
                    `${defaultAddress.recipientName}, ${defaultAddress.phoneNumber}, ${defaultAddress.address}`
                  ) : (
                    'Chưa có địa chỉ mặc định'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}