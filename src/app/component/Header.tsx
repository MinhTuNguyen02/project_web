import styles from "../page.module.css";
import Link from 'next/link';
import { useState, useEffect } from "react";


export default function Header(){
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
            <Link href="http://localhost:3000" className={styles.logo_link}>
              <picture>
                <img className={styles.img_logo} src="/img/logo.webp" alt=""/>
              </picture>
            </Link>
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
              <ul className={styles.item_big}>
                <li className={styles.nav_item}>
                  <Link href="/products/vpp-hs">VPP Học Sinh</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/vo?subcategory=vo">Vở</Link></li>
                    <li><Link href="/products/but?subcategory=but">Bút</Link></li>
                    <li><Link href="/products/balo?subcategory=balo">Balo</Link></li>
                    <li><Link href="/products/boc-vo?subcategory=boc-vo">Bọc vở</Link></li>
                    <li><Link href="/products/nhan-vo?subcategory=nhan-vo">Nhãn vở</Link></li>
                    <li><Link href="/products/tay?subcategory=tay">Tẩy</Link></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/products/vpp-vp">VPP Văn Phòng</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/kep-tai-lieu?subcategory=kep-tai-lieu">Kẹp tài liệu</Link></li>
                    <li><Link href="/products/so-tai-lieu?subcategory=so-tai-lieu">Sổ tài liệu</Link></li>
                    <li><Link href="/products/ban-ghim?subcategory=ban-ghim">Bản ghim</Link></li>
                    <li><Link href="/products/giay-note?subcategory=giay-note">Giấy note</Link></li>
                    <li><Link href="/products/giay-in?subcategory=giay-in">Giấy in</Link></li>
                    <li><Link href="/products/trang-tri-van-phong?subcategory=trang-tri-van-phong">Trang trí văn phòng</Link></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/products/dcv">Dụng cụ vẽ</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/but-ve?subcategory=but-ve">Bút vẽ</Link></li>
                    <li><Link href="/products/mau-ve?subcategory=mau-ve">Màu vẽ</Link></li>
                    <li><Link href="/products/khay-co-ve?subcategory=khy-co-ve">Khay - Cọ vẽ</Link></li>
                    <li><Link href="/products/tapve-giayve?subcategory=tapve-giayve">Tập vẽ - Giấy vẽ</Link></li>
                    <li><Link href="/products/bo-ve-sang-tao?subcategory=bo-ve-sang-tao">Bộ vẽ sáng tạo</Link></li>
                    <li><Link href="/products/gia-ve-khung-ve?subcategory=gia-ve-khung-ve">Giá vẽ - Khung vẽ</Link></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/products/but-viet">Bút viết</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/but-chi?subcategory=but-chi">Bút chì</Link></li>
                    <li><Link href="/products/but-bi?subcategory=but-bi">Bút bi</Link></li>
                    <li><Link href="/products/but-nuoc?subcategory=but-nuoc">Bút nước</Link></li>
                    <li><Link href="/products/but-long?subcategory=but-long">Bút lông</Link></li>
                    <li><Link href="/products/but-da-quang?subcategory=but-da-quang">Bút dạ quang</Link></li>
                    <li><Link href="/products/but-muc?subcategory=but-muc">Bút mực</Link></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/products/san-pham-ve-giay">Sản phẩm về giấy</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/so-cac-loai?subcategory=so-cac-loai">Sổ các loại</Link></li>
                    <li><Link href="/products/tap-vo?subcategory=tap-vo">Tập vở</Link></li>
                    <li><Link href="/products/giay-notr?subcategory=giay-note">Giấy note</Link></li>
                    <li><Link href="/products/sticker?subcategory=sticker">Sticker</Link></li>
                    <li><Link href="/products/cac-loai-giay-khac?subcategory=cac-loai-giay-khac">Các loại giấy khác</Link></li>
                    <li><Link href="/products/nhan-vo?subcategory=nhan-vo">Nhãn vở</Link></li>
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
            <Link href="/news" title="Tin tức">
              <i className="fa-solid fa-bullhorn"></i>
              Tin tức
            </Link>
            <Link href="/contact" title="Liên hệ">
              <i className="fa-solid fa-square-phone"></i>
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Slogan() {
  const texts = [
    "Stationery lựa chọn số 1 cho bạn",
    "Stationery lựa chọn số 1 cho bạn - Hãy đến với chúng tôi",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Bắt đầu hiệu ứng fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true); // Bắt đầu hiệu ứng fade-in
      }, 500); // Đợi 500ms để hoàn thành fade-out trước khi đổi text
    }, 3000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.slogan}>
      <span className={fade ? styles.fade_in : styles.fade_out}>{texts[index]}</span>
    </div>
  )
}