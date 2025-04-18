"use client";
import "./resetCss.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./component/Header";
import Footer from "./component/Footer";
import BackHeader from "./component/BackHeader";
import Slider from "./contentPageHome/Slider";
import CategorySlider from "./contentPageHome/CategorySlider";
import ProductFeaturedSwiper from "./contentPageHome/ProductFeaturedSwiper";
import Prod_forYou from "./contentPageHome/Prod_forYou";
import Section_Service from "./contentPageHome/Section_Service";
import Section_Sign from "./contentPageHome/Section_Sign";
import styles from "./page.module.css";

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
    </div>
  );
}

  