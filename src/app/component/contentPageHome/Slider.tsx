/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Link from 'next/link'
import styles from "@/app/page.module.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "@/app/globals.css"

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
            <Link href="/pages/allProducts">
              <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810718/slider1_hqkqx6.webp" alt="Slide 1" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/pages/allProducts">
              <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810718/slider2_hesm23.jpg" alt="Slide 2" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/pages/allProducts">
              <img src="https://res.cloudinary.com/dafqftdol/image/upload/v1747810718/slider3_mqgsqk.jpg" alt="Slide 3" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
    )
}