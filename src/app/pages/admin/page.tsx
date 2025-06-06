/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useState, useContext, useEffect } from "react"
import styles from "@/app/page.module.css"
import { clsx } from "clsx"
import { toast, ToastContainer } from 'react-toastify'
import { fetchMessagesAPI } from "@/app/api"
import { AuthContext } from "@/app/contexts/AuthContext"
import { useRouter } from "next/navigation"
import BackHeader from "@/app/component/header_footer/BackHeader"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import { Prod_Content } from "@/app/component/adminComponent/Prod_Content"
import { CategoryList } from "@/app/component/adminComponent/Cate_Content"
import { Order_Content } from "@/app/component/adminComponent/Order_Content"
import { News_Content } from "@/app/component/adminComponent/News_Content"
import { Mess_List } from "@/app/component/adminComponent/Mess_List"
import { Promotion_Content } from "@/app/component/adminComponent/Promotion_Content"
import { Statistic_Content } from "@/app/component/adminComponent/Statistic_Content"
import { User_Content } from "@/app/component/adminComponent/User_Content"
import "./admin.css"
import 'react-toastify/dist/ReactToastify.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <BackHeader/>
      <Header/>
      <MainContent />
      <Footer/>
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function MainContent(){
  const { user, loading: authLoading } = useContext(AuthContext)
  const router = useRouter()

  const [isDisable, setIsDisable] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<"category" | "product" | "order" | "promotion" | "statistic" | "user" | "news">("category")
  const [openNotify, setOpenNotify] = useState(false)
  const [hasNewMessage, setHasNewMessage] = useState(false)
  // const [lastMessageCount, setLastMessageCount] = useState(0)
  const [errorCount, setErrorCount] = useState(0)

  const handleCheckboxChange = (event: { target: { checked: boolean } }) => {
    setIsDisable(event.target.checked)
  }

  const handleTabChange = (tab: "category" | "product" | "order" | "promotion" | "statistic" | "user" | "news") => {
    setActiveTab(tab)
  }

  const handleOpenNotify = () => {
    setOpenNotify((prev) => !prev)
    if (hasNewMessage) {
      setHasNewMessage(false)
      fetchMessagesAPI()
        .then((messages) => {
          localStorage.setItem('lastMessageCount', messages.length.toString())
        })
        .catch((error) => {
          toast.error(error.message || 'Không thể cập nhật trạng thái thông báo')
        })
    }
  }

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        toast.error("Vui lòng đăng nhập để truy cập trang admin")
        router.push("/pages/login")
      } else if (user.role !== "admin") {
        toast.error("Bạn không có quyền truy cập trang admin")
        router.push("/")
      }
    }
  }, [user, authLoading, router])

  useEffect(() => {
    // Khởi tạo lastMessageCount từ localStorage
    const storedCount = localStorage.getItem('lastMessageCount')
    const initialCount = storedCount ? parseInt(storedCount, 10) : 0
    // setLastMessageCount(initialCount)

    const checkNewMessages = async () => {
      try {
        const messages = await fetchMessagesAPI()
        const currentCount = messages.length
        if (currentCount > initialCount) {
          setHasNewMessage(true)
          // setLastMessageCount(currentCount)
          localStorage.setItem('lastMessageCount', currentCount.toString())
        }
        setErrorCount(0)
      } catch (error) {
        setErrorCount((prev) => prev + 1)
        if (errorCount >= 3) {
          if (error instanceof Error) {
            toast.error(error.message || "Không thể kiểm tra tin nhắn mới")
          } else {
            toast.error("Không thể kiểm tra tin nhắn mới")
          }
          setErrorCount(0)
        }
      }
    }

    checkNewMessages()
    const interval = setInterval(checkNewMessages, 10000)
    return () => clearInterval(interval)
  }, [])

  if (authLoading) {
    return <div>Đang tải...</div>
  }

  if (!user || user.role !== 'admin') {
    return null
  }
  
  return(
    <div className="page_admin">
      <div className="container-admin">
        <div className="account-box-shadow">
          <div className="update">
            <span>Xem</span>
            <label className="switch">
              <input type="checkbox" onChange={handleCheckboxChange}/>
              <span className="slider round"></span>
            </label>
            <span>Cập nhật</span>
            <div className={clsx("notify", { "new-noti": hasNewMessage })}>
              <i className="fa-regular fa-bell" onClick={handleOpenNotify}></i>
              <div className={clsx("noti-content", openNotify ? "open-noti" : "close-noti")}>
                <Mess_List/>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === "category" ? "active" : ""}`}
              onClick={() => handleTabChange("category")}
            >
              Danh mục
            </button>
            <button
              className={`auth-tab ${activeTab === "product" ? "active" : ""}`}
              onClick={() => handleTabChange("product")}
            >
              Sản phẩm
            </button>
            <button
              className={`auth-tab ${activeTab === "order" ? "active" : ""}`}
              onClick={() => handleTabChange("order")}
            >
              Đơn hàng
            </button>
            <button
              className={`auth-tab ${activeTab === "promotion" ? "active" : ""}`}
              onClick={() => handleTabChange("promotion")}
            >
              Khuyến mãi
            </button>
            <button
              className={`auth-tab ${activeTab === "statistic" ? "active" : ""}`}
              onClick={() => handleTabChange("statistic")}
            >
              Thống kê
            </button>
            <button
              className={`auth-tab ${activeTab === "user" ? "active" : ""}`}
              onClick={() => handleTabChange("user")}
            >
              Khách hàng
            </button>
            <button
              className={`auth-tab ${activeTab === "news" ? "active" : ""}`}
              onClick={() => handleTabChange("news")}
            >
              Tin tức
            </button>
          </div>

          {activeTab === "category" ? (
            <CategoryList isDisable={isDisable}/>
          ) : activeTab === "product" ? (
            <Prod_Content isDisable={isDisable}/>
          ) : activeTab === "order" ? (
            <Order_Content isDisable={isDisable}/>
          ) : activeTab === "promotion" ? (
            <Promotion_Content isDisable={isDisable}/>
          ) : activeTab === "statistic" ? (
            <Statistic_Content/>
          ) : activeTab === "user" ? (
            <User_Content/>
          ) : (
            <News_Content isDisable={isDisable}/>
          )}
        </div>
      </div>
    </div>
  )
}
