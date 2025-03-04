// src/app/components/Header.tsx
"use client";
import styles from "../page.module.css";
import Link from 'next/link';
import { useState, useEffect } from "react";
import clsx from "clsx";

export function BackHeader() {
  return(
    <div className={styles.backHeader}>
      <a href="#">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
}

export function Slogan() {
  const texts = [
    "Stationery lựa chọn số 1 cho bạn",
    "Stationery lựa chọn số 1 cho bạn - Hãy đến với chúng tôi",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slogan}>
      <span className={fade ? styles.fade_in : styles.fade_out}>{texts[index]}</span>
    </div>
  )
}

export function HeaderTop() {
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
                <Link href="/login">
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
            <div className={styles.sign_log}>
              <Link href="/login">Đăng nhập</Link>
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

export function HeaderMenu() {
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
              <ul className={styles.item_big}>
                <li className={styles.nav_item}>
                  <a href="">VPP Học Sinh</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Vở</a></li>
                    <li><a href="">Bút</a></li>
                    <li><a href="">Balo</a></li>
                    <li><a href="">Bọc vở</a></li>
                    <li><a href="">Nhãn vở</a></li>
                    <li><a href="">Tẩy</a></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <a href="">VPP Văn Phòng</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Kẹp tài liệu</a></li>
                    <li><a href="">Sổ tài liệu</a></li>
                    <li><a href="">Bắn ghim</a></li>
                    <li><a href="">Giấy note</a></li>
                    <li><a href="">Giấy in</a></li>
                    <li><a href="">Trang tri văn phòng</a></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <a href="">Dụng cụ vẽ</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Bút vẽ</a></li>
                    <li><a href="">Màu vẽ</a></li>
                    <li><a href="">Khay - Cọ vẽ</a></li>
                    <li><a href="">Tập vẽ - Giấy vẽ</a></li>
                    <li><a href="">Bộ vẽ sáng tạo</a></li>
                    <li><a href="">Giá vẽ - khung vẽ</a></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <a href="">Bút viết</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Bút chì</a></li>
                    <li><a href="">Bút bi</a></li>
                    <li><a href="">Bút nước</a></li>
                    <li><a href="">Bút lông</a></li>
                    <li><a href="">Bút dạ quang</a></li>
                    <li><a href="">Bút mực</a></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <a href="">Sản phẩm về giấy</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Sổ các loại</a></li>
                    <li><a href="">Tập - Vở</a></li>
                    <li><a href="">Giấy note</a></li>
                    <li><a href="">Sticker</a></li>
                    <li><a href="">Các loại giấy khác</a></li>
                    <li><a href="">Nhãn vở</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <Slogan/>

          <div className={styles.menu}>
            <a href="" title="Khuyến mãi">
              <i className="fa-solid fa-fire"></i>
              Khuyến mãi
            </a>
            <a href="#service" title="Dịch vụ">
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

export default function Header() {
  return(
    <div className={styles.header}>
      <HeaderTop/>
      <HeaderMenu/>
    </div>
  )
}
