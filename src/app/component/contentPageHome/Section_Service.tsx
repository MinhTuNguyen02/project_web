/* eslint-disable @next/next/no-img-element */
import styles from "@/app/page.module.css"

export default function Section_Service(){
    return(
      <section className={styles.section_service} id="service">
        <section className={styles.sub_sec_service}>
          <div className={styles.container}>
            <div className={styles.service_content}>
              <div className={styles.service_left}>
                <div className={styles.block_title}>
                  <h2>Dịch vụ của chúng tôi</h2>
                </div>
                <div className={styles.block_content}>
                  <div className={styles.item}>
                    <div className={styles.icon_service}>
                      <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810719/xetai_dh7hby.svg" alt="" />
                    </div>
                    <div className={styles.info}>
                      <h3>MIỄN PHÍ GIAO HÀNG NỘI THÀNH</h3>
                      <p>Giao miễn phí trong nội thành HN và HCM</p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon_service}>
                      <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810718/trahang_srcjyr.svg" alt="" />
                    </div>
                    <div className={styles.info}>
                      <h3>ĐỔI Trả hàng trong vòng 24h</h3>
                      <p>Hỗ trợ đổi, trả hàng cho khách khi sản phẩm có lỗi</p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon_service}>
                      <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810717/service_3_sofcxu.webp" alt="" />
                    </div>
                    <div className={styles.info}>
                      <h3>Kiểm tra hàng khi nhận hàng</h3>
                      <p>Khách hàng kiểm tra hàng trước khi nhận</p>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon_service}>
                      <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810718/service_4_ovxg4c.png" alt="" />
                    </div>
                    <div className={styles.info}>
                      <h3>THANH TOÁN COD</h3>
                      <p>Hỗ trợ khách hàng thanh toán cod</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.service_right}>
                <div className={styles.block_img}>
                  <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810717/deliver_rjcrmb.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
}