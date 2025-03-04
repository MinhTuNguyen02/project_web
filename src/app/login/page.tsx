"use client";
import clsx from "clsx";
import Image from "next/image";
import "./login_css.css";
import "./resetCss.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import styles from './page.module.css';
// import Login from "./login.tsx";
import React, { useState } from "react";

import "./login_css.css";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Slider */}
  
      {/* Content */}
      <Login/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

function Header(){
  return(
    <div className={styles.header}>
      <HeaderTop/>
      <HeaderMenu/>
    </div>
  )
}

function HeaderTop(){
  return(
    <div className={styles.header_top}>
      <div className={styles.container}>
        <div className={styles.block_top}>
          <div className={styles.logo}>
            <a href="#" className={styles.logo_link}>
              <picture>
                <img className={styles.img_logo} src="/img/logo.webp" alt=""/>
              </picture>
            </a>
          </div>

          <div className={styles.search}>
            <form className={styles.header_search} role="search">
              <input className={styles.input_search}  type="text" placeholder="Tìm kiếm sản phẩm..." autoComplete="off"/>
            </form>
            <div className={styles.search_icon}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          
          <div className={styles.hotline_account}>
            <ul className={styles.group_acc}>
              <li className={styles.hotline}>
                <a href="tel:19008386" title="call 19008386">
                  <i className="fa-solid fa-square-phone"></i>
                  <span>
                    <strong> Hotline: </strong>
                    1900 8386 
                  </span>
                </a>
              </li>

              <li>
                <div className={styles.icon}>
                  <a href="" title="Sản phẩm yêu thích">
                    <i className="fa-regular fa-heart"></i>
                    <span>0</span>
                  </a>
                </div>
              </li>

              <li>
                <div className={styles.icon}>
                  <a href="" title="Giỏ hàng">
                    <i className="fa-solid fa-bag-shopping"></i>
                      <span>0</span>
                  </a>
                </div>
              </li>
    
              <li className={styles.account}>
                <div className={styles.icon}>
                <Link href="/login"> {/* Dùng <Link> và href="/login" */}
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
            <div className={styles.sign_log}>
            <Link href="/login">Đăng nhập</Link> {/* Dùng <Link> và href="/login" */}
              <a href="">Đăng ký</a>
              </div>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeaderMenu(){
  return(
    <div className={styles.header_menu}>
      <div className={styles.container}>
        <div className={styles.block_menu}>

          <div className={styles.category}>
            <div className={styles.title}>
              <i className="fa-solid fa-list-ul"></i>
              Danh mục sản phẩm
            </div>
            <div className={styles.list_menu}>

            </div>
          </div>

          <div className={styles.slogan}>
            <span>
              Hãy đến với chúng tôi
            </span>
          </div>

          <div className={styles.menu}>
            <a href="" title="Khuyến mãi">
              <i className="fa-solid fa-fire"></i>
              Khuyến mãi
            </a>
            <a href="" title="Dịch vụ">
              <i className="fa-solid fa-shield-heart"></i>
              Dịch vụ
            </a>
            <a href="" title="Tin tức">
              <i className="fa-solid fa-bullhorn"></i>
              Tin tức
            </a>
            <a href="" title="Liên hệ">
              <i className="fa-solid fa-square-phone"></i>
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Login(){
    const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  
    const handleTabChange = (tab: "login" | "register") => {
      setActiveTab(tab);
    };
  
    return (
      <div className="page_login">
        <div className="container">
          <h1 className="title-head">ĐĂNG NHẬP TÀI KHOẢN</h1>
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
              Template Stationery cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.
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

function Footer(){
  return(
    <div className={styles.footer}>
      <div className={styles.first_footer}>
        <div className={styles.container}>
          <div className={styles.footer_content}>
            <div className={styles.footer_content_1}>
              <div className={styles.logo_footer}>
                <a href="">
                  <img src="/img/logo.webp" alt="" />
                </a>
              </div>
              <ul>
                <li>
                <i className="fa-solid fa-location-dot"></i>
                  <strong>Trụ sở: </strong>
                  số 97 - đường Man Thiện - phường Hiệp Phú - Quận 9 - TP Hồ Chí Minh
                </li>
                <li>
                <i className="fa-solid fa-headset"></i>
                  <strong>Tổng đài: </strong>
                  <a href="tel:19008386">1900 8386</a>
                </li>
                <li>
                  <i className="fa-regular fa-envelope"></i>
                  <strong>Email: </strong>
                  <a href="mailto:hahahehe@gmail.com">hahahehe@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className={styles.footer_content_2}>
              <h4><span>Tìm hiểu thêm</span></h4>
              <div className={styles.footer_menu}>
                <a href="">abcde</a>
                <a href="">fghij</a>
                <a href="">klmno</a>
                <a href="">pqrst</a>
                <a href="">uvwxyz</a>
              </div>
            </div>

            <div className={styles.footer_content_3}>
              <h4><span>Hỗ trợ khách hàng</span></h4>
              <div className={styles.footer_menu}>
                <a href="">abcde</a>
                <a href="">fghij</a>
                <a href="">klmno</a>
                <a href="">pqrst</a>
                <a href="">uvwxyz</a>
              </div>
            </div>

            <div className={styles.footer_content_4}>
              <h4><span>Theo dõi chúng tôi</span></h4>
              <div className={styles.social_network}>
                <ul className={styles.wrapper_social}>
                  <li className={clsx(styles.icon_sn, styles.facebook)}>
                    <span className={styles.tooltip}>Facebook</span>
                    <span>
                      <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                    </span>
                  </li>
                  <li className={clsx(styles.icon_sn, styles.instagram)}>
                    <span className={styles.tooltip}>Instagram</span>
                    <span>
                      <a href=""><i className="fa-brands fa-instagram"></i></a>
                    </span>
                  </li>
                  <li className={clsx(styles.icon_sn, styles.x)}>
                    <span className={styles.tooltip}>X</span>
                    <span>
                      <a href=""><i className="fa-brands fa-square-x-twitter"></i></a>
                    </span>
                  </li>
                  <li className={clsx(styles.icon_sn, styles.youtube)}>
                    <span className={styles.tooltip}>Youtube</span>
                    <span>
                      <a href="https://www.youtube.com/"><i className="fa-brands fa-square-youtube"></i></a>
                    </span>
                  </li>
                </ul>
              </div>
              <h4><span>Phương thức thanh toán</span></h4>
              <div className={styles.payment}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>

      </div>
    </div>
  )
}
