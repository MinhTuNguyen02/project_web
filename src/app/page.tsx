import Image from "next/image";
import styles from "./page.module.css";
import "./resetCss.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Slider */}
  
      {/* Content */}
  
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
      {/* <div className={styles.test}></div>
      <div className={styles.test_1}></div> */}
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
                  <a href="">
                    <i className="fa-regular fa-user"></i>
                  </a>
                </div>
                <div className={styles.sign_log}>
                  <a href="">Đăng nhập</a>
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
              <h4><span>Phương thức thanh toán</span></h4>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>

      </div>
    </div>
  )
}