// import styles from "../page.module.css";
import styles from "./component.module.css"
import clsx from "clsx";

export default function Footer(){
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
                      <a href=""><i className="fa-brands fa-square-youtube"></i></a>
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
