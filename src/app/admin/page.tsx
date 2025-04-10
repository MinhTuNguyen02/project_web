"use client";
import { useState } from "react";
import "../resetCss.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "../page.module.css";
import "./admin.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Prod_Content } from "../adminComponent/Prod_Content";
import { CategoryList } from "../adminComponent/Cate_Content"

export default function Home() {
  return (
    <div className={styles.main}>
      <Header/>
      <MainContent />
      <Footer/>
    </div>
  );
}

function MainContent(){
  const [isDisable, setIsDisable] = useState(false);
  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setIsDisable(event.target.checked); 
  };

  const [activeTab, setActiveTab] = useState<"category" | "product">("category");
  const handleTabChange = (tab: "category" | "product") => {
    setActiveTab(tab);
  };
  return(
    <div className="page_admin">
      <div className="container">
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
      </div>

      {activeTab === "category" ? (
        <CategoryList isDisable={isDisable}/>
      ) : (
        <Prod_Content isDisable={isDisable}/>
      )}
    </div>
      </div>
    </div>
  )
}
