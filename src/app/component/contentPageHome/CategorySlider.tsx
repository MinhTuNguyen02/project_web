/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from "@/app/page.module.css"
import clsx from "clsx"
import { fetchCategoryAPI } from '@/app/api/index'
import { Category } from "@/app/types"


export default function CategorySlider() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategoryAPI().then(category => setCategories(category))    
  }, [])
  
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
              {categories.map((category: Category) => (
                <SwiperSlide key={category._id}>
                  <div className={styles.cate_item}>
                    <Link className="image" href={`/pages/allProducts?categoryId=${category._id}`} title={category.categoryName}>
                      <img
                        className="image_cate_thumb"
                        width="75"
                        height="75"
                        src={category.img}
                        alt={category.categoryName}
                      />
                    </Link>
                    <h3 className={styles.title_cate}>
                      <Link href={`/pages/allProducts?categoryId=${category._id}`} title={category.categoryName}>
                        {category.categoryName}
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