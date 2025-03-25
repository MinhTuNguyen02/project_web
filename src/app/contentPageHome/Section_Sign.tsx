import styles from "../page.module.css";
import clsx from "clsx";

export default function Section_Sign(){
    return(
      <section className={styles.section_sign}>
        <section className={styles.section_malchip}>
          <div className={styles.container}>
            <div className={styles.sign_content}>
              <div className={styles.sign_title}>
                <h2>Đăng ký email để nhận được ưu đãi mới nhất của chúng tôi</h2>
                <p>Rất hân hạnh được phục vụ bạn. Chúc bạn có trải nghiệm tuyệt vời về dịch vụ của Stationery</p>
              </div>
  
              <div className={styles.mail_footer}>
                <form action="">
                  <input type="email" placeholder="Nhập email của bạn tại đây ..." />
                  <span className={clsx(styles.btn_mail,styles.subcribe)}><button>Đăng ký ngay</button></span>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
}