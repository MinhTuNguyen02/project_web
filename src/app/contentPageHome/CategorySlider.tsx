/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import Link from 'next/link'
import styles from "../page.module.css"
import clsx from "clsx"

export default function CategorySlider() {
    const categories = [
      {
        title: "Vpp Học Sinh",
        imgSrc: "img/cate1.webp",
      },
      {
        title: "Vpp văn phòng",
        imgSrc: "img/cate2.webp",
      },
      {
        title: "Phụ kiện",
        imgSrc: "img/cate3.webp",
      },
      {
        title: "Cặp - Túi xách",
        imgSrc: "img/cate4.webp",
      },
      {
        title: "Dụng cụ văn phòng",
        imgSrc: "img/cate5.webp",
      },
    ]
    return (
      <section className={clsx(styles.section_2,'section-2')}>
        <section className={styles.section_category}>
          <div className={styles.container}>
            <div className={styles.cate_list}>
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                loop={false}
                grabCursor={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                autoplay={false}
                breakpoints={{
                  300: { slidesPerView: 2, spaceBetween: 5 },
                  640: { slidesPerView: 3, spaceBetween: 30 },
                  768: { slidesPerView: 4, spaceBetween: 30 },
                  992: { slidesPerView: 5, spaceBetween: 30 },
                  1199: { slidesPerView: 5, spaceBetween: 30 },
                }}
              >
                {categories.map((category, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.cate_item}>
                      <Link className="image" href="/allProducts" title={category.title}>
                        <img
                          className="image_cate_thumb"
                          width="75"
                          height="75"
                          src={`/img/${category.imgSrc.replace('img/', '')}`}
                          alt={category.title}
                        />
                      </Link>
                      <h3 className={styles.title_cate}>
                        <Link href="/allProducts" title={category.title}>
                          {category.title}
                        </Link>
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </section>
      </section>
    )
}