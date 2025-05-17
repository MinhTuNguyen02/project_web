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
            <Link href="/" className={styles.logo_link}>
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
                  <Link href={user ? (user.role=="admin"? "/admin" : "/account") : "/login"}>
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
                      <Link href={`/login?tab=${'login'}`}>Đăng nhập</Link>
                      <Link href={`/login?tab=${'register'}`}>Đăng ký</Link>
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
  const router = useRouter()

  const handleCategoryClick = (subcategory) => {
    router.push(`/allProducts?search=${encodeURIComponent(subcategory)}`)
  }

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
                  <p>VPP Học Sinh</p>
                  <ul className={styles.item_small}>
                    <li onClick={() => handleCategoryClick("Vở")}>Vở</li>
                    <li onClick={() => handleCategoryClick("Bút")}>Bút</li>
                    <li onClick={() => handleCategoryClick("Balo")}>Balo</li>
                    <li onClick={() => handleCategoryClick("Bọc vở")}>Bọc vở</li>
                    <li onClick={() => handleCategoryClick("Máy tính")}>Máy tính</li>
                    <li onClick={() => handleCategoryClick("Tẩy")}>Tẩy</li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <p>VPP Văn Phòng</p>
                  <ul className={styles.item_small}>
                    <li onClick={() => handleCategoryClick("Kẹp tài liệu")}>Kẹp tài liệu</li>
                    <li onClick={() => handleCategoryClick("Sổ")}>Sổ</li>
                    <li onClick={() => handleCategoryClick("Kéo")}>Kéo</li>
                    <li onClick={() => handleCategoryClick("Bàn làm việc")}>Bàn làm việc</li>
                    <li onClick={() => handleCategoryClick("Giấy in")}>Giấy in</li>
                    <li onClick={() => handleCategoryClick("Ghế")}>Ghế</li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <p>Dụng cụ vẽ</p>
                  <ul className={styles.item_small}>
                    <li onClick={() => handleCategoryClick("Bút vẽ")}>Bút vẽ</li>
                    <li onClick={() => handleCategoryClick("Màu vẽ")}>Màu vẽ</li>
                    <li onClick={() => handleCategoryClick("Khay - Cọ vẽ")}>Khay - Cọ vẽ</li>
                    <li onClick={() => handleCategoryClick("Giấy vẽ")}>Giấy vẽ</li>
                    <li onClick={() => handleCategoryClick("Bộ vẽ sáng tạo")}>Bộ vẽ sáng tạo</li>
                    <li onClick={() => handleCategoryClick("Giá vẽ - khung vẽ")}>Giá vẽ - Khung vẽ</li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <p>Bút viết</p>
                  <ul className={styles.item_small}>
                    <li onClick={() => handleCategoryClick("Bút chì")}>Bút chì</li>
                    <li onClick={() => handleCategoryClick("Bút mực")}>Bút mực</li>
                    <li onClick={() => handleCategoryClick("Bút đánh dấu")}>Bút đánh dấu</li>
                    <li onClick={() => handleCategoryClick("Bút lông")}>Bút lông</li>
                    <li onClick={() => handleCategoryClick("Bút highlight")}>Bút highlight</li>
                    <li onClick={() => handleCategoryClick("Bút xóa")}>Bút xóa</li>
                  </ul>
                </li>
                <li className={styles.nav_item}>
                  <p>Sản phẩm về giấy</p>
                  <ul className={styles.item_small}>
                    <li onClick={() => handleCategoryClick("Sổ các loại")}>Sổ các loại</li>
                    <li onClick={() => handleCategoryClick("Tập vở")}>Tập vở</li>
                    <li onClick={() => handleCategoryClick("Giấy note")}>Giấy note</li>
                    <li onClick={() => handleCategoryClick("Sticker")}>Sticker</li>
                    <li onClick={() => handleCategoryClick("Giấy")}>Các loại giấy khác</li>
                    <li onClick={() => handleCategoryClick("Nhãn vở")}>Nhãn vở</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <Slogan/>

          <div className={styles.menu}>
            <a href="/promotion" title="Khuyến mãi">
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