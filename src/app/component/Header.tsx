import styles from "./component.module.css"
import Link from 'next/link'
import { useState, useEffect, useContext, useRef } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "../contexts/AuthContext"
import { CartContext } from "../contexts/cartContext"
import { toast } from "react-toastify"
import { fetchProductAPI } from "../api/index"

export default function Header(){
  return(
    <div className={styles.header}>
      <HeaderTop/>
      <HeaderMenu/>
    </div>
  )
}

function HeaderTop() {
  const { user, logout } = useContext(AuthContext)
  const { cart, wishlist } = useContext(CartContext)
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef(null)
  const debounceTimeout = useRef(null)

  const cartCount = cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0
  const wishlistCount = wishlist?.products?.length || 0

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  // Fetch gợi ý khi gõ
  useEffect(() => {
    const fetchSuggestions = async () => {
      console.log('Fetching suggestions for:', searchQuery)
      if (searchQuery.trim().length < 2) {
        setSuggestions([])
        setShowSuggestions(false)
        console.log('Suggestions cleared (query < 2 chars)')
        return
      }
      try {
        const products = await fetchProductAPI("", searchQuery)
        setSuggestions(products.slice(0, 5)) // Giới hạn 5 gợi ý
        setShowSuggestions(products.length > 0)
        console.log('Suggestions set:', products.slice(0, 5))
      } catch (err) {
        console.error('Fetch error:', err)
        setSuggestions([])
        setShowSuggestions(false)
      }
    }

    // Debounce để tránh gọi API liên tục
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }
    debounceTimeout.current = setTimeout(fetchSuggestions, 300)

    return () => clearTimeout(debounceTimeout.current)
  }, [searchQuery])

  // Ẩn gợi ý khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false)
        console.log('Suggestions hidden (clicked outside)')
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      toast.info("Vui lòng nhập từ khóa tìm kiếm")
      return
    }
    setShowSuggestions(false)
    router.push(`/allProducts?search=${encodeURIComponent(searchQuery.trim())}`)
    setSearchQuery("")
  }

  const handleSuggestionClick = (productId) => {
    setSearchQuery("")
    setSuggestions([])
    setShowSuggestions(false)
    router.push(`/productDetails/${productId}`)
  }

  return (
    <div className={styles.header_top}>
      <div className={styles.container}>
        <div className={styles.block_top}>
          <div className={styles.logo}>
            <Link href="http://localhost:3000" className={styles.logo_link}>
              <picture>
                <img className={styles.img_logo} src="/img/logo.webp" alt="" />
              </picture>
            </Link>
          </div>

          <div className={styles.search} ref={searchRef}>
            <form className={styles.header_search} role="search" onSubmit={handleSearch}>
              <input
                className={styles.input_search}
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch(e)
                }}
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className={styles.suggestions}>
                  {suggestions.map((product) => (
                    <li
                      key={product._id}
                      className={styles.suggestion_item}
                      onClick={() => handleSuggestionClick(product._id)}
                    >
                      <img
                        src={product.img[0] || "/img/placeholder.jpg"}
                        alt={product.productName}
                        className={styles.suggestion_img}
                      />
                      <span>{product.productName}</span>
                    </li>
                  ))}
                </ul>
              )}
            </form>
            <div className={styles.search_icon} onClick={handleSearch}>
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
                  <Link href="/wishlist" title="Sản phẩm yêu thích">
                    <i className="fa-regular fa-heart"></i>
                    <span>{wishlistCount}</span>
                  </Link>
                </div>
              </li>

              <li>
                <div className={styles.icon}>
                  <Link href="/cart" title="Giỏ hàng">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span>{cartCount}</span>
                  </Link>
                </div>
              </li>

              <li className={styles.account}>
                <div className={styles.icon}>
                  <Link href={user ? "/account" : "/login"}>
                    <i className="fa-regular fa-user"></i>
                  </Link>
                </div>
                <div className={styles.sign_log}>
                  {user ? (
                    <>
                      <Link href="/account">Xem thông tin</Link>
                      <button onClick={handleLogout} className={styles.logoutButton}>
                        Đăng xuất
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login">Đăng nhập</Link>
                      <Link href="/login">Đăng ký</Link>
                    </>
                  )}
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
                  <Link href="/products/vpp-hs">VPP Học Sinh</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/vo?subcategory=vo">Vở</Link></li>
                    <li><Link href="/products/but?subcategory=but">Bút</Link></li>
                    <li><Link href="/products/balo?subcategory=balo">Balo</Link></li>
                    <li><Link href="/products/boc-vo?subcategory=boc-vo">Bọc vở</Link></li>
                    <li><Link href="/products/nhan-vo?subcategory=nhan-vo">Nhãn vở</Link></li>
                    <li><Link href="/products/tay?subcategory=tay">Tẩy</Link></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/products/vpp-vp">VPP Văn Phòng</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/kep-tai-lieu?subcategory=kep-tai-lieu">Kẹp tài liệu</Link></li>
                    <li><Link href="/products/so-tai-lieu?subcategory=so-tai-lieu">Sổ tài liệu</Link></li>
                    <li><Link href="/products/ban-ghim?subcategory=ban-ghim">Bản ghim</Link></li>
                    <li><Link href="/products/giay-note?subcategory=giay-note">Giấy note</Link></li>
                    <li><Link href="/products/giay-in?subcategory=giay-in">Giấy in</Link></li>
                    <li><Link href="/products/trang-tri-van-phong?subcategory=trang-tri-van-phong">Trang trí văn phòng</Link></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/products/dcv">Dụng cụ vẽ</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/but-ve?subcategory=but-ve">Bút vẽ</Link></li>
                    <li><Link href="/products/mau-ve?subcategory=mau-ve">Màu vẽ</Link></li>
                    <li><Link href="/products/khay-co-ve?subcategory=khy-co-ve">Khay - Cọ vẽ</Link></li>
                    <li><Link href="/products/tapve-giayve?subcategory=tapve-giayve">Tập vẽ - Giấy vẽ</Link></li>
                    <li><Link href="/products/bo-ve-sang-tao?subcategory=bo-ve-sang-tao">Bộ vẽ sáng tạo</Link></li>
                    <li><Link href="/products/gia-ve-khung-ve?subcategory=gia-ve-khung-ve">Giá vẽ - Khung vẽ</Link></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/products/but-viet">Bút viết</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/but-chi?subcategory=but-chi">Bút chì</Link></li>
                    <li><Link href="/products/but-bi?subcategory=but-bi">Bút bi</Link></li>
                    <li><Link href="/products/but-nuoc?subcategory=but-nuoc">Bút nước</Link></li>
                    <li><Link href="/products/but-long?subcategory=but-long">Bút lông</Link></li>
                    <li><Link href="/products/but-da-quang?subcategory=but-da-quang">Bút dạ quang</Link></li>
                    <li><Link href="/products/but-muc?subcategory=but-muc">Bút mực</Link></li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <Link href="/products/san-pham-ve-giay">Sản phẩm về giấy</Link>
                  <ul className={styles.item_small}>
                    <li><Link href="/products/so-cac-loai?subcategory=so-cac-loai">Sổ các loại</Link></li>
                    <li><Link href="/products/tap-vo?subcategory=tap-vo">Tập vở</Link></li>
                    <li><Link href="/products/giay-notr?subcategory=giay-note">Giấy note</Link></li>
                    <li><Link href="/products/sticker?subcategory=sticker">Sticker</Link></li>
                    <li><Link href="/products/cac-loai-giay-khac?subcategory=cac-loai-giay-khac">Các loại giấy khác</Link></li>
                    <li><Link href="/products/nhan-vo?subcategory=nhan-vo">Nhãn vở</Link></li>
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
            <Link href="/news" title="Tin tức">
              <i className="fa-solid fa-bullhorn"></i>
              Tin tức
            </Link>
            <Link href="/contact" title="Liên hệ">
              <i className="fa-solid fa-square-phone"></i>
              Liên hệ
            </Link>
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
  ]
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // Bắt đầu hiệu ứng fade-out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setFade(true) // Bắt đầu hiệu ứng fade-in
      }, 500) // Đợi 500ms để hoàn thành fade-out trước khi đổi text
    }, 3000)

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.slogan}>
      <span className={fade ? styles.fade_in : styles.fade_out}>{texts[index]}</span>
    </div>
  )
}