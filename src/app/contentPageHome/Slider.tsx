/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Link from 'next/link'
import styles from "../page.module.css"
import "../resetCss.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../globals.css"

export default function Slider(){
    return(
      <section className="section-1">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className={styles.home_slider}
        >
          <SwiperSlide>
            <Link href="/allProducts">
              <img src="/img/slider1.webp" alt="Slide 1" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/allProducts">
              <img src="/img/slider2.jpg" alt="Slide 2" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/allProducts">
              <img src="/img/slider3.jpg" alt="Slide 3" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    )
}