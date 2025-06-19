/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from "@/app/page.module.css"
import clsx from "clsx"
import { fetchProductAPI, addToCartAPI, addToWishlistAPI, removeFromWishlistAPI } from "@/app/api"
import { AuthContext } from "@/app/contexts/AuthContext"
import { CartContext } from "@/app/contexts/cartContext"
import { toast } from "react-toastify"
import { Product } from "@/app/types"
import "@fortawesome/fontawesome-free/css/all.min.css"

export default function Prod_forYou() {
  const { user } = useContext(AuthContext)
  const { wishlist, updateCart, updateWishlist } = useContext(CartContext)
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [wishlistStatus, setWishlistStatus] = useState<Record<string, boolean>>({})

  // Khởi tạo wishlistStatus từ wishlist
  useEffect(() => {
    if (wishlist?.products) {
      const status: Record<string, boolean> = {}
      wishlist.products.forEach((p: Product) => {
        status[p._id] = true
      })
      setWishlistStatus(status)
    }
  }, [wishlist])

  // Lấy sản phẩm từ API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetchProductAPI()
        const productList = Array.isArray(response) ? response : response.products || []
        if (!productList.length) {
          throw new Error('Không có sản phẩm nào')
        }
        const fetchedProducts = productList.slice(10, 16)
        setProducts(fetchedProducts)
        setError(null)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message || "Không thể tải sản phẩm")
        } else {
          setError("Không thể tải sản phẩm")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " ₫"
  }

  const handleAddToCart = async (productId: string) => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào giỏ hàng")
      router.push("/pages/login")
      return
    }
    // Tìm sản phẩm với productId
    const product = products.find((item: Product) => item._id === productId);
  
    // Kiểm tra sản phẩm tồn tại và inventory
    if (!product) {
      toast.error("Sản phẩm không tồn tại");
      return;
    }
    if (product.inventory === 0) {
      toast.error("Sản phẩm đã hết hàng");
      return;
    }
    try {
      const response = await addToCartAPI(productId, 1)
      updateCart(response.cart)
      toast.success("Đã thêm vào giỏ hàng")
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Không thể thêm vào giỏ hàng")
      } else {
        toast.error("Không thể thêm vào giỏ hàng")
      }
    }
  }

  const handleToggleWishlist = async (productId: string) => {
    if (!user) {
      toast.error("Vui lòng đăng nhập để thêm vào yêu thích")
      router.push("/pages/login")
      return
    }
    try {
      let response
      const isInWishlist = wishlistStatus[productId] || false
      if (isInWishlist) {
        response = await removeFromWishlistAPI(productId)
        toast.success("Đã xóa khỏi yêu thích")
        setWishlistStatus((prev) => {
          const newStatus = { ...prev }
          delete newStatus[productId]
          return newStatus
        })
      } else {
        response = await addToWishlistAPI(productId)
        toast.success("Đã thêm vào yêu thích")
        setWishlistStatus((prev) => ({
          ...prev,
          [productId]: true,
        }))
      }
      updateWishlist(response.wishlist)
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || "Không thể cập nhật yêu thích")
      } else {
        toast.error("Không thể cập nhật yêu thích")
      }
    }
  }

  if (loading) {
    return (
      <section className={clsx(styles.section_4, "section-4")}>
        <div className={styles.container}>
          <div className={clsx(styles.block_title, styles.clearfix)}>
            <h2>VĂN PHÒNG PHẨM CHO BẠN</h2>
          </div>
          <p>Đang tải...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className={clsx(styles.section_4, "section-4")}>
        <div className={styles.container}>
          <div className={clsx(styles.block_title, styles.clearfix)}>
            <h2>VĂN PHÒNG PHẨM CHO BẠN</h2>
          </div>
          <p className="error-message">{error}</p>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return (
      <section className={clsx(styles.section_4, "section-4")}>
        <div className={styles.container}>
          <div className={clsx(styles.block_title, styles.clearfix)}>
            <h2>VĂN PHÒNG PHẨM CHO BẠN</h2>
          </div>
          <p>Không có sản phẩm nào</p>
        </div>
      </section>
    )
  }

  return (
    <section className={clsx(styles.section_4, "section-4")}>
      <section className={styles.section_product_forYou}>
        <div className={styles.container}>
          <div className={clsx(styles.block_title, styles.clearfix)}>
            <Link href="/pages/allProducts">
              <h2>VĂN PHÒNG PHẨM CHO BẠN</h2>
            </Link>
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
              {products.map((product: Product) => (
                <SwiperSlide key={product._id} className={styles.swiper_slide}>
                  <div className={styles.product_block_item}>
                    <div className={styles.product_image_wrapper}>
                      <Link href={`/pages/productDetails/${product._id}`} className={styles.product_transition}>
                        <img
                          className={styles.product_thumbnail}
                          src={product.img[0]}
                          alt={product.productName}
                        />
                      </Link>
                      <button
                        className={clsx(styles.wishlistButton, { [styles.active]: wishlistStatus[product._id] })}
                        onClick={() => handleToggleWishlist(product._id)}
                      >
                        <i className={wishlistStatus[product._id] ? "fas fa-heart" : "far fa-heart"}></i>
                      </button>
                    </div>
                    <div className={styles.product_info}>
                      <Link href={`/pages/productDetails/${product._id}`} className={styles.item_product_name}>{product.productName}</Link>
                      <div className={styles.product_price}>
                        <span className={styles.price}>{formatPrice(product.price)}</span>
                      </div>
                    </div>
                    <div className={styles.action_cart}>
                      <button
                        className={styles.cart_button}
                        onClick={() => handleAddToCart(product._id)}
                      >
                        Thêm vào giỏ hàng
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
  )
}