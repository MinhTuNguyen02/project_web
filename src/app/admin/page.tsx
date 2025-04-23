"use client"
import { useState, useContext, useEffect } from "react"
import "../resetCss.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import styles from "../page.module.css"
import "./admin.css"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from "../contexts/AuthContext"
import { useRouter } from "next/navigation"
import Header from "../component/Header"
import Footer from "../component/Footer"
import { Prod_Content } from "../adminComponent/Prod_Content"
import { CategoryList } from "../adminComponent/Cate_Content"
import { Order_Content } from "../adminComponent/Order_Content"

export default function Home() {
  return (
    <div className={styles.main}>
      <Header/>
      <MainContent />
      <Footer/>
      <ToastContainer theme="colored"/>
    </div>
  )
}

function MainContent(){
  const { user, loading: authLoading } = useContext(AuthContext)
  const router = useRouter()
  
  const [isDisable, setIsDisable] = useState(false)
  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setIsDisable(event.target.checked) 
  }

  const [activeTab, setActiveTab] = useState<"category" | "product" | "order">("category")
  const handleTabChange = (tab: "category" | "product" | "order") => {
    setActiveTab(tab)
  }

  // Chuyển hướng nếu chưa đăng nhập
  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        toast.error("Vui lòng đăng nhập để truy cập trang admin")
        router.push("/login")
      } else if (user.role !== "admin") {
        toast.error("Bạn không có quyền truy cập trang admin")
        router.push("/")
      }
    }
  }, [user, authLoading, router])

  if (authLoading) {
    return <div>Đang tải...</div>
  }

  if (!user || user.role!='admin') {
    return null // Không render gì khi chưa đăng nhập
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
      </div>

      {activeTab === "category" ? (
        <CategoryList isDisable={isDisable}/>
      ) : activeTab === "product" ? (
        <Prod_Content isDisable={isDisable}/>
      ) : (
        <Order_Content/>
      )}
    </div>
      </div>
    </div>
  )
}
