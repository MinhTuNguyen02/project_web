"use client"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Header from "@/app/component/header_footer/Header"
import Footer from "@/app/component/header_footer/Footer"
import BackHeader from "@/app/component/header_footer/BackHeader"
import Slider from "@/app/component/contentPageHome/Slider"
import CategorySlider from "@/app/component/contentPageHome/CategorySlider"
import ProductFeaturedSwiper from "@/app/component/contentPageHome/ProductFeaturedSwiper"
import Prod_forYou from "@/app/component/contentPageHome/Prod_forYou"
import Section_Service from "@/app/component/contentPageHome/Section_Service"
import Section_Sign from "@/app/component/contentPageHome/Section_Sign"
import styles from "./page.module.css"
import { ToastContainer } from "react-toastify"

export default function Home() {
  return (
    <div className={styles.main}>
      <BackHeader/>
      <Header/>

      <Slider/>
      <CategorySlider/>
      <ProductFeaturedSwiper/>
      <Prod_forYou/>
      <Section_Service/>
      <Section_Sign/>

      <Footer/>
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

  