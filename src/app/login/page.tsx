"use client";
import "./login_css.css";

import '@fortawesome/fontawesome-free/css/all.min.css';

import React, { useState } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}

function Login() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const handleTabChange = (tab: "login" | "register") => {
    setActiveTab(tab);
  };

  return (
    <div className="page_login">
      <div className="container">
      <div className="news-banner">
      <div className="breadcrumb">
         <span>Trang chủ </span><span className="separator">/</span><span> Đăng nhập tài khoản</span>
      </div>
      <h1 className="banner-title">ĐĂNG NHẬP TÀI KHOẢN</h1>
      </div>
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
          {activeTab === "login" ? (
            <form className="form-signup">
              <div className="form-group">
                <label>Email<span>*</span></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập Địa chỉ Email"
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu<span>*</span></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập Mật khẩu"
                />
              </div>
              <a href="#" className="forgot-password">
                Quên mật khẩu?
              </a>
              <button type="submit" className="btn-radius">
                ĐĂNG NHẬP
              </button>
            </form>
          ) : (
            <form className="form-signup">
              <div className="form-group">
                <label>Email<span>*</span></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập Địa chỉ Email"
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu<span>*</span></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập Mật khẩu"
                />
              </div>
              <div className="form-group">
                <label>Nhập lại mật khẩu<span>*</span></label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập lại mật khẩu"
                />
              </div>
              <button type="submit" className="btn-radius">
                ĐĂNG KÝ
              </button>
            </form>
          )}

          <p className="privacy-text">
          Copyright © 2025 hehe companry. All rights reserved..
          </p>

          {/* Social Login */}
          <div className="social-login">
            <span>hoặc đăng nhập qua</span>
            <div className="social-buttons">
              <button className="btn-facebook">Facebook</button>
              <button className="btn-google">Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
