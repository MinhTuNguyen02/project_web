/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from 'next/link';
import styles from "../page.module.css";
import clsx from "clsx";


export default function ProductFeaturedSwiper(){
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
            <h2><Link href="/allProducts" title="Sản phẩm nổi bật">Sản phẩm nổi bật</Link></h2>
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