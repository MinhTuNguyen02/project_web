"use client";
import clsx from "clsx";
import Image from "next/image";
import "resetCss/resetCss.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./page.module.css";



export default function Home() {
  return (
    <div className={styles.main}>
      <BackHeader/>
      {/* Header */}
      <Header/>

      {/* Slider */}
      <Slider/>

    {/* Content */}
      {/* Phân loại sản phẩm */}
      <CategorySlider/>

      {/* Sản phẩm nổi bật */}
      <ProductFeaturedSwiper/>

      {/* VPP Cho bạn */}
      <Prod_forYou/>

      {/* Dịch vụ */}
      <Section_Service/>
      <Section_Sign/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

function BackHeader(){
  return(
    <div className={styles.backHeader}>
      <a href="#">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
}

function Header(){
  return(
    <div className={styles.header}>
      <HeaderTop/>
      <HeaderMenu/>
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
                <Link href="/login"> {/* Dùng <Link> và href="/login" */}
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
            <div className={styles.sign_log}>
            <Link href="/login">Đăng nhập</Link> {/* Dùng <Link> và href="/login" */}
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
              <ul className={styles.item_big}>
                <li className={styles.nav_item}>
                  <a href="">VPP Học Sinh</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Vở</a></li>
                    <li><a href="">Bút</a></li>
                    <li><a href="">Balo</a></li>
                    <li><a href="">Bọc vở</a></li>
                    <li><a href="">Nhãn vở</a></li>
                    <li><a href="">Tẩy</a></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <a href="">VPP Văn Phòng</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Kẹp tài liệu</a></li>
                    <li><a href="">Sổ tài liệu</a></li>
                    <li><a href="">Bắn ghim</a></li>
                    <li><a href="">Giấy note</a></li>
                    <li><a href="">Giấy in</a></li>
                    <li><a href="">Trang tri văn phòng</a></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <a href="">Dụng cụ vẽ</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Bút vẽ</a></li>
                    <li><a href="">Màu vẽ</a></li>
                    <li><a href="">Khay - Cọ vẽ</a></li>
                    <li><a href="">Tập vẽ - Giấy vẽ</a></li>
                    <li><a href="">Bộ vẽ sáng tạo</a></li>
                    <li><a href="">Giá vẽ - khung vẽ</a></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <a href="">Bút viết</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Bút chì</a></li>
                    <li><a href="">Bút bi</a></li>
                    <li><a href="">Bút nước</a></li>
                    <li><a href="">Bút lông</a></li>
                    <li><a href="">Bút dạ quang</a></li>
                    <li><a href="">Bút mực</a></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <a href="">Sản phẩm về giấy</a>
                  <ul className={styles.item_small}>
                    <li><a href="">Sổ các loại</a></li>
                    <li><a href="">Tập - Vở</a></li>
                    <li><a href="">Giấy note</a></li>
                    <li><a href="">Sticker</a></li>
                    <li><a href="">Các loại giấy khác</a></li>
                    <li><a href="">Nhãn vở</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <Slogan/>

          <div className={styles.menu}>
            <a href="" title="Khuyến mãi">
              <i className="fa-solid fa-fire"></i>
              Khuyến mãi
            </a>
            <a href="#service" title="Dịch vụ">
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

function Slogan() {
  const texts = [
    "Stationery lựa chọn số 1 cho bạn",
    "Stationery lựa chọn số 1 cho bạn - Hãy đến với chúng tôi",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Bắt đầu hiệu ứng fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true); // Bắt đầu hiệu ứng fade-in
      }, 500); // Đợi 500ms để hoàn thành fade-out trước khi đổi text
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slogan}>
      <span className={fade ? styles.fade_in : styles.fade_out}>{texts[index]}</span>
    </div>
  )
}

function Slider(){
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
      <img src="img/slider1.webp" alt="Slide 1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="img/slider2.jpg" alt="Slide 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="img/slider3.jpg" alt="Slide 3" />
    </SwiperSlide>
  </Swiper>
  </section>
  )
}



function CategorySlider() {
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
  <section className={styles.section_2}>
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
                  <a className="image" href="#" title={category.title}>
                    <img
                      className="image_cate_thumb"
                      width="75"
                      height="75"
                      src={category.imgSrc}
                      alt={category.title}
                    />
                  </a>
                  <h3 className={styles.title_cate}>
                    <a href="#" title={category.title}>
                      {category.title}
                    </a>
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


function ProductFeaturedSwiper(){
  const products = [
      {
          id: 1,
          name: 'Vở viết kẻ ngang nhiều hình siêu ngộ nghĩnh',
          price: '12.000₫',
          oldPrice: '41.000₫',
          link: '/vo-viet-ke-ngang-nhieu-hinh-sieu-ngo-nghinh',
          image: 'img/sp1.webp',
      },
      {
          id: 2,
          name: 'Hộp đựng văn phòng phẩm bằng nhựa trong suốt tiện dụng',
          price: '15.000₫',
          oldPrice: '25.000₫',
          link: '/hop-dung-van-phong-pham-bang-nhua-trong-suot-tien-dung',
          image: 'img/sp2.webp',
      },
      {
          id: 3,
          name: 'Sổ tay cá nhân tiện dụng văn phòng phẩm',
          price: '28.000₫',
          oldPrice: '',
          link: '/so-tay-ca-nhan-tien-dung-van-phong-pham',
          image: 'img/sp3.webp',
      },
      {
          id: 4,
          name: 'Máy Tính Mini Gấu Bỏ Túi Dễ Thương',
          price: '29.000₫',
          oldPrice: '49.000₫',
          link: '/may-tinh-mini-gau-bo-tui-de-thuong',
          image: 'img/sp4.webp',
      }
  ];

  return (
  <section className={clsx(styles.section_3,"section-3")}>
    <section className={styles.section_product_featured}>
      <div className={styles.container}>
        <div className={styles.block_title}>
          <h2><a href="san-pham-noi-bat" title="Sản phẩm nổi bật">Sản phẩm nổi bật</a></h2>
        </div>
        <div className={styles.block_product}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                300: { slidesPerView: 2, spaceBetween: 15 },
                500: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                991: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 30 }
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className={styles.swiper_slide}>
                <div className={styles.product_block_item}>
                  <a href={product.link} className={styles.product_transition}>
                    <img className={styles.product_thumbnail} src={product.image} alt={product.name} />
                  </a>
                  <div className={styles.product_info}>
                    <a href={product.link} className={styles.item_product_name}>{product.name}</a>
                    <div className={styles.product_price}>
                      <span className={styles.price}>{product.price}</span>
                      {product.oldPrice && <span className={styles.old_price}>{product.oldPrice}</span>}
                    </div>
                  </div>
                  <div className={styles.action_cart}>
                    <button className={styles.cart_button} onClick={() => window.location.href = product.link}>
                      Tùy chọn
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  </section>
  );
};

function Prod_forYou(){
  const products = [
    {
        id: 1,
        name: 'Vở viết kẻ ngang nhiều hình siêu ngộ nghĩnh',
        price: '12.000₫',
        oldPrice: '41.000₫',
        link: '/vo-viet-ke-ngang-nhieu-hinh-sieu-ngo-nghinh',
        image: 'img/sp1.webp',
    },
    {
        id: 2,
        name: 'Hộp đựng văn phòng phẩm bằng nhựa trong suốt tiện dụng',
        price: '15.000₫',
        oldPrice: '25.000₫',
        link: '/hop-dung-van-phong-pham-bang-nhua-trong-suot-tien-dung',
        image: 'img/sp2.webp',
    },
    {
        id: 3,
        name: 'Sổ tay cá nhân tiện dụng văn phòng phẩm',
        price: '28.000₫',
        oldPrice: '',
        link: '/so-tay-ca-nhan-tien-dung-van-phong-pham',
        image: 'img/sp3.webp',
    },
    {
        id: 4,
        name: 'Máy Tính Mini Gấu Bỏ Túi Dễ Thương',
        price: '29.000₫',
        oldPrice: '49.000₫',
        link: '/may-tinh-mini-gau-bo-tui-de-thuong',
        image: 'img/sp4.webp',
    },
    {
      id: 5,
      name: 'Máy Tính Mini Gấu Bỏ Túi Dễ Thương',
      price: '29.000₫',
      oldPrice: '49.000₫',
      link: '/may-tinh-mini-gau-bo-tui-de-thuong',
      image: 'img/sp4.webp',
  },
  {
    id: 6,
    name: 'Máy Tính Mini Gấu Bỏ Túi Dễ Thương',
    price: '29.000₫',
    oldPrice: '49.000₫',
    link: '/may-tinh-mini-gau-bo-tui-de-thuong',
    image: 'img/sp4.webp',
}
];

return (
  <section className={clsx(styles.section_4,"section-4")}>
    <section className={styles.section_product_forYou}>
      <div className={styles.container}>
      <div className={clsx(styles.block_title,styles.clearfix)}>
        <h2>VĂN PHÒNG PHẨM CHO BẠN</h2>
        {/* <ul className={clsx(styles.tab_title,styles.clearfix)}>
          <li className={styles.tab_link}><span>Sách</span></li>
          <li className={styles.tab_link}><span>Vở</span></li>
          <li className={styles.tab_link}><span>Bút</span></li>
          <li className={styles.tab_link}><span>Bộ cắt dán</span></li>
          <li className={styles.tab_link}><span>Bút màu</span></li>
        </ul>                 */}
      </div>
        <div className={styles.block_product}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={4}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                300: { slidesPerView: 2, spaceBetween: 15 },
                500: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                991: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 4, spaceBetween: 30 }
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className={styles.swiper_slide}>
                <div className={styles.product_block_item}>
                  <a href={product.link} className={styles.product_transition}>
                    <img className={styles.product_thumbnail} src={product.image} alt={product.name} />
                  </a>
                  <div className={styles.product_info}>
                    <a href={product.link} className={styles.item_product_name}>{product.name}</a>
                    <div className={styles.product_price}>
                      <span className={styles.price}>{product.price}</span>
                      {product.oldPrice && <span className={styles.old_price}>{product.oldPrice}</span>}
                    </div>
                  </div>
                  <div className={styles.action_cart}>
                    <button className={styles.cart_button} onClick={() => window.location.href = product.link}>
                      Tùy chọn
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  </section>
  );
}

function Section_Service(){
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
                    <img src="img/xetai.svg" alt="" />
                  </div>
                  <div className={styles.info}>
                    <h3>MIỄN PHÍ GIAO HÀNG NỘI THÀNH</h3>
                    <p>Giao miễn phí trong nội thành HN và HCM</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon_service}>
                    <img src="img/trahang.svg" alt="" />
                  </div>
                  <div className={styles.info}>
                    <h3>ĐỔI Trả hàng trong vòng 24h</h3>
                    <p>Hỗ trợ đổi, trả hàng cho khách khi sản phẩm có lỗi</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon_service}>
                    <img src="img/ktrahang.svg" alt="" />
                  </div>
                  <div className={styles.info}>
                    <h3>Kiểm tra hàng khi nhận hàng</h3>
                    <p>Khách hàng kiểm tra hàng trước khi nhận</p>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon_service}>
                    <img src="img/cod.svg" alt="" />
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
                <img src="img/deliver.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

function Section_Sign(){
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