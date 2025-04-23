"use client"
import "./product_css.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import React, { useState, useRef, useEffect } from "react"
import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'


import Header from "../../component/Header"
import Footer from "../../component/Footer"

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header/>
      <CategoryPage/>
      <Footer/>
    </div>
  )
}


const categories = [
  {
    id: 'vpp-hs',
    name: 'VPP Học Sinh',
    slug: 'vpp-hs',
    children: [
      { id: 'vo', name: 'Vở', slug: 'vo', parentId: 'vpp-hs' },
      { id: 'but', name: 'Bút', slug: 'but', parentId: 'vpp-hs' },
      { id: 'balo', name: 'Balo', slug: 'balo', parentId: 'vpp-hs' },
      { id: 'boc-vo', name: 'Bọc vở', slug: 'boc-vo', parentId: 'vpp-hs' },
      { id: 'nhan-vo', name: 'Nhãn vở', slug: 'nhan-vo', parentId: 'vpp-hs' },
      { id: 'tay', name: 'Tẩy', slug: 'tay', parentId: 'vpp-hs' }
    ]
  },
  {
    id: 'vpp-vp',
    name: 'VPP Văn phòng',
    slug: 'vpp-vp',
    children: [
      { id: 'kep-tai-lieu', name: 'Kẹp tài liệu', slug: 'kep-tai-lieu', parentId: 'vpp-vp' },
      { id: 'so-tai-lieu', name: 'Sổ tài liệu', slug: 'so-tai-lieu', parentId: 'vpp-vp' },
      { id: 'ban-ghim', name: 'Bấm ghim', slug: 'ban-ghim', parentId: 'vpp-vp' },
      { id: 'giay-note', name: 'Giấy note', slug: 'giay-note', parentId: 'vpp-vp' },
      { id : 'giay-in', name:'Giấy in', slug: 'giay-in',parentId:'vpp-vp'},
      { id:'trang-tri-van-phong', name:'Trang trí văn phòng', slug: 'trang-tri-van-phong',parentId: 'vpp-vp'}
    ]
  },
  {
    id: 'dcv',
    name: 'Dụng Cụ Vẽ',
    slug: 'dcv',
    children: [
      { id: 'but-ve', name: 'Bút vẽ', slug: 'but-ve', parentId: 'dcv' },
      { id: 'mau-ve', name: 'Màu vẽ', slug: 'mau-ve', parentId: 'dcv' },
      { id: 'khay-co-ve', name: 'Khay - Cọ vẽ', slug: 'khay-co-ve', parentId: 'dcv' },
      { id:'tapve-giayve', name:'Tập vẽ - Giấy vẽ', slug:'tapve-giayve',parentId :'dcv'},
      { id:'bo-ve-sang-tao',name:'Bộ vẽ sáng tạo',slug:'bo-ve-sang-tao', parentId:'dcv'},
      { id:'gia-ve-khung-ve',name:'Giá vẽ - Khung vẽ',slug :'gia-ve-khung-ve',parentId:'dcv'}
    ]
  },
  {
    id :'but-viet',
    name:'Bút viết',
    slug:'but-viet',
    children: [
      { id :'but-chi', name:'Bút chì', slug:'but-chi',parentId:'but-viet'},
      { id : 'but-bi', name:'Bút bi',slug:"but-bi",parentId:'but-viet'},
      { id : 'but-nuoc',name:'Bút nước',slug:'but-nuoc',parentId:'but-viet'},
      { id : 'but-long',name:'Bút lông',slug:'but-long',parentId:'but-viet'},
      { id : 'but-da-quang', name:'Bút dạ quang', slug:'but-da-quang', parentId:'but-viet'},
      { id : 'but-muc', name: 'Bút mực', slug :'but-muc', parentId:'but-viet'}
    ]
  },
  {
    id : 'san-pham-ve-giay',
    name : 'Sản phẩm về giấy',
    slug:'san-pham-ve-giay',
    children: [
      { id :'so-cac-loai', name:'Sổ các loại', slug:'so-cac-loai',parentId:'san-pham-ve-giay'},
      { id :'tap-vo', name:'Tập - Vở', slug:'tap-vo', parentId:'san-pham-ve-giay'},
      { id :'giay-note', name:'Giấy note', slug:'giay-note', parentId:'san-pham-ve-giay'},
      { id : 'sticker', name:'Sticker', slug:'sticker', parentId:'san-pham-ve-giay'},
      { id : 'cac-loai-giay-khac', name:'Các loại giấy khác', slug:'cac-loai-giay-khac', parentId:'san-pham-ve-giay'},
      { id : 'nhan-vo', name:'Nhãn vở', slug:'nhan-vo',parentId:'san-pham-ve-giay'}
    ]
  }
]

function CategoryPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const category = params.category
  const subcategory = searchParams.get('subcategory')
  const productMainRef = useRef<HTMLDivElement>(null)

  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [sortedProducts, setSortedProducts] = useState<Product[]>([])
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({})
  const [selectedPublishers, setSelectedPublishers] = useState<Record<string, boolean>>({})
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([])

  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState('default')
  const [loading, setLoading] = useState(true)

  const [isOpenCategory, setIsOpenCategory] = useState(true)
  const [isOpenPublisher, setIsOpenPublisher] = useState(true)
  const [isOpenPrice, setIsOpenPrice] = useState(true)

  const sampleProducts = [
    {
      id: "1",
      name: "Bút Bi Thiên Long TL-027",
      price: 5000,
      category: ["vpp-hs", "but"],
      publisher: "Thiên Long",
      image: "/img/full1.webp",
      rating: 4.5,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "2",
      name: "Sổ Tay Kẻ Ngang A5",
      price: 35000,
      category: ["vpp-vp", "so-tai-lieu"], 
      publisher: "OEM",
      image: "/img/id1.webp",
      rating: 4.2,
      inStock: true,
      buttonType: "customize",
    },
    {
      id: "3",
      name: "Vở Campus 200 Trang",
      price: 18000,
      category: ["vpp-hs", "vo"], 
      publisher: "Campus",
      image: "/img/id2.webp",
      rating: 4.8,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "4",
      name: "Kẹp Giấy Inox 32mm",
      price: 12000,
      category: ["vpp-vp", "kep-giay"], 
      publisher: "OEM",
      image: "/img/foryou1.webp",
      rating: 4.0,
      inStock: true,
      buttonType: "buyNow",
    },
    {
      id: "5",
      name: "Bút Dạ Quang Stabilo",
      price: 25000,
      category: ["vpp-hs", "but"],
      publisher: "Stabilo",
      image: "/img/sp1.webp",
      rating: 4.7,
      inStock: false,
      buttonType: "addToCart",
    },
    {
      id: "6",
      name: "Giấy A4 Double A 80gsm",
      price: 85000,
      category: ["vpp-vp", "giay-in"], 
      publisher: "Double A",
      image: "/img/sp2.webp",
      rating: 4.6,
      inStock: true,
      buttonType: "customize",
    },
    {
      id: "7",
      name: "Bìa Hồ Sơ Nhựa A4",
      price: 15000,
      category: ["vpp-vp", "bia-ho-so"], 
      publisher: "OEM",
      image: "/img/sp3.webp",
      rating: 4.3,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "8",
      name: "Thước Kẻ Nhựa 30cm",
      price: 7000,
      category: ["vpp-hs", "thuoc-ke"], 
      publisher: "Thiên Long",
      image: "/img/sp4.webp",
      rating: 4.1,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "9",
      name: "Bút Xóa Kéo Plus WH-605",
      price: 20000,
      category: ["vpp-hs", "but-xoa"],
      publisher: "Plus",
      image: "/img/sp2.webp",
      rating: 4.9,
      inStock: true,
      buttonType: "buyNow",
    },
    {
      id: "10",
      name: "Tập Vở Hồng Hà 120 Trang",
      price: 15000,
      category: ["vpp-hs", "vo"], 
      publisher: "Hồng Hà",
      image: "/img/id1.webp",
      rating: 4.4,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "11",
      name: "Kéo Văn Phòng 21cm",
      price: 25000,
      category: ["vpp-vp", "keo"], 
      publisher: "OEM",
      image: "/img/id2.webp",
      rating: 4.5,
      inStock: true,
      buttonType: "customize",
    },
    {
      id: "12",
      name: "Bút Gel Pilot G2",
      price: 30000,
      category: ["vpp-hs", "but"], 
      publisher: "Pilot",
      image: "/img/id3.webp",
      rating: 4.8,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "13",
      name: "Giấy Note Dán 3x3",
      price: 10000,
      category: ["vpp-vp", "giay-note"], 
      publisher: "3M",
      image: "/img/foryou1.webp",
      rating: 4.6,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "14",
      name: "Máy Tính Casio FX-570VN Plus",
      price: 550000,
      category: ["vpp-hs", "may-tinh"], 
      publisher: "Casio",
      image: "/img/full1.webp",
      rating: 4.9,
      inStock: true,
      buttonType: "buyNow",
    },
    {
      id: "15",
      name: "Bút Lông Bảng Thiên Long WB-03",
      price: 12000,
      category: ["vpp-vp", "but-long-bang"], 
      publisher: "Thiên Long",
      image: "/img/sp1.webp",
      rating: 4.7,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "16",
      name: "Bảng Trắng Văn Phòng 60x90cm",
      price: 350000,
      category: ["vpp-vp", "bang-trang"], 
      publisher: "OEM",
      image: "/img/sp2.webp",
      rating: 4.8,
      inStock: true,
      buttonType: "customize",
    },
    {
      id: "17",
      name: "Bút Chì Gỗ 2B",
      price: 5000,
      category: ["vpp-hs", "but-chi"], 
      publisher: "Staedtler",
      image: "/img/sp3.webp",
      rating: 4.4,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "18",
      name: "Hộp Bút Đa Năng Xanh Dương",
      price: 70000,
      category: ["vpp-hs", "hop-but"],
      publisher: "OEM",
      image: "/img/sp4.webp",
      rating: 4.3,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "19",
      name: "Giấy Ghi Chú 5 Màu",
      price: 15000,
      category: ["vpp-vp", "giay-note"], 
      publisher: "3M",
      image: "/img/full1.webp",
      rating: 4.6,
      inStock: true,
      buttonType: "addToCart",
    },
    {
      id: "20",
      name: "Bút Bi Xóa Được Pilot Frixion",
      price: 45000,
      category: ["vpp-hs", "but"], 
      publisher: "Pilot",
      image: "/img/foryou1.webp",
      rating: 4.8,
      inStock: true,
      buttonType: "addToCart",
    },
  ]
  

  useEffect(() => {
    if (subcategory) {
      setSelectedSubCategories(prev => {
        if (!prev.includes(subcategory)) {
          return [...prev, subcategory]
        }
        return prev
      })
    }
  }, [subcategory])
  
  
  
  const productsPerPage = 9

  interface Product {
    id: string
    name: string
    price: number
    publisher?: string
    createdAt?: string | number | Date 
    category?: string | string[]
    categories?: string[]
    image: string
    rating: number
    inStock: boolean
    buttonType: string
  }
  
  const findCategoryInfo = () => {
    const mainCategory = categories.find(cat => cat.slug === category)
    if (mainCategory) {
      return {
        isMainCategory: true,
        category: mainCategory,
        parentCategory: null,
        subCategories: mainCategory.children || [],
      }
    }
    for (const main of categories) {
      const subCat = main.children?.find(sub => sub.slug === category)
      if (subCat) {
        return {
          isMainCategory: false,
          category: subCat,
          parentCategory: main,
          subCategories: main.children.filter(sub => sub.slug !== category),
        }
      }
    }
    return {
      isMainCategory: false,
      category: null,
      parentCategory: null,
      subCategories: [],
    }
  }
  
  const { isMainCategory, category: currentCategory, parentCategory, subCategories } = findCategoryInfo()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const data = sampleProducts 
        setProducts(data)
        console.log("Products fetched:", data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
    let filtered: Product[] = [...products]
    useEffect(() => {
      if (!products.length) {
        setFilteredProducts([])
        return
      }  
      let filtered = [...products]
      if (category || selectedSubCategories.length > 0) {
        filtered = filtered.filter(product => {
          const productCategories = getProductCategories(product)

          if (selectedSubCategories.length > 0) {
            return selectedSubCategories.some(subCat => productCategories.includes(subCat))
          }

          if (category) {
            if (typeof category === 'string' && productCategories.includes(category)) {
              return true
            }

            const mainCategory = categories.find(cat => cat.slug === category)
            if (mainCategory) {
              return mainCategory.children.some(child => 
                productCategories.includes(child.slug)
              )
            }
          }
          
          return false
        })
      }
      console.log("Filtered products:", filtered)
      setFilteredProducts(filtered)
    }, [category, selectedSubCategories, products])  

  useEffect(() => {
    let sorted = [...filteredProducts]
    switch (sortOption) {
      case 'name-az':
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-za':
        sorted.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      default:
        sorted.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
        break
    }
    
    setSortedProducts(sorted)
    setCurrentPage(1) 
  }, [filteredProducts, sortOption])

  const getProductCategories = (product: Product): string[] => {
    if (!product.category) {
      return []
    }
    return Array.isArray(product.category) ? product.category : [product.category]
  }
  
  

  const handleSubCategoryChange = (subCatSlug: string) => {
    setSelectedSubCategories(prev => {
      if (prev.includes(subCatSlug)) {
        return prev.filter(slug => slug !== subCatSlug)
      }
      return [...prev, subCatSlug]
    })
  }
  
  // Xử lý khi checkbox danh mục thay đổi
  const handleCategoryChange = (categoryId:string) => {
    setSelectedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  // Xử lý khi checkbox nhà xuất bản thay đổi
  const handlePublisherChange = (publisherId:string) => {
    setSelectedPublishers(prev => ({
      ...prev,
      [publisherId]: !prev[publisherId]
    }))
  }

  // Xử lý khi thay đổi sắp xếp
  const handleSortChange = (option : string) => {
    setSortOption(option)
  }

  const toggleCategory = () => setIsOpenCategory(!isOpenCategory)
  const togglePublisher = () => setIsOpenPublisher(!isOpenPublisher)
  const togglePrice = () => setIsOpenPrice(!isOpenPrice)

  // Tính toán sản phẩm cho trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)

  const paginate = (pageNumber: number) => {
      setCurrentPage(pageNumber)
      if (productMainRef.current) {
          productMainRef.current.scrollIntoView({ behavior: 'smooth' })
      }
  }
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1)
    }
  }
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1)
    }
  }
  const formatPrice = (price:number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
  }

  return (
    <div className="page_product">
      <div className="news-banner">
        <div className="breadcrumb">
          <span>Trang chủ </span>
          <span className="separator">/</span>
          {parentCategory && (
            <>
              <span> {parentCategory.name} </span>
              <span className="separator">/</span>
            </>
          )}
          <span> {currentCategory ? currentCategory.name : 'Tất cả sản phẩm'}</span>
        </div>
        <h1 className="banner-title">{currentCategory ? currentCategory.name.toUpperCase() : 'TẤT CẢ SẢN PHẨM'}</h1>
      </div>
      
      <div className="container">
        <div className="product-container">
          <div className="product-sidebar">
            {/* Hiển thị danh mục con khi đang ở trang danh mục chính */}
            {isMainCategory && subCategories.length > 0 && (
              <div className={`filter-section ${isOpenCategory ? 'open' : ''}`}>
                <h3 onClick={toggleCategory} className="filter-title">
                  DANH MỤC CON
                  <i className="fas fa-chevron-down"></i>
                </h3>
                <ul className="category-list">
                  {subCategories.map(subCat => (
                    <li key={subCat.id}>
                      <label>
                        <input 
                          type="checkbox" 
                          id={`subcategory-${subCat.id}`}
                          checked={selectedSubCategories.includes(subCat.slug)}
                          onChange={() => handleSubCategoryChange(subCat.slug)}
                        />
                        <span>{subCat.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hiển thị danh mục liên quan khi đang ở trang danh mục con */}        
            <div className={`filter-section ${isOpenPrice ? 'open' : ''}`}>
              <h3 onClick={togglePrice} className="filter-title">
                SẮP XẾP THEO GIÁ
                <i className="fas fa-chevron-down"></i>
              </h3>
              <ul className="category-list">
                <li>
                  <label>
                    <input 
                      type="radio" 
                      name="sort" 
                      id="sort-default"
                      checked={sortOption === 'default'}
                      onChange={() => handleSortChange('default')}
                    /> 
                    <span>Mặc định</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="radio" 
                      name="sort" 
                      id="sort-az" 
                      checked={sortOption === 'name-az'}
                      onChange={() => handleSortChange('name-az')}
                    /> 
                    <span>Tên A-Z</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="radio" 
                      name="sort" 
                      id="sort-za" 
                      checked={sortOption === 'name-za'}
                      onChange={() => handleSortChange('name-za')}
                    /> 
                    <span>Tên Z-A</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="radio" 
                      name="sort" 
                      id="sort-price-asc" 
                      checked={sortOption === 'price-asc'}
                      onChange={() => handleSortChange('price-asc')}
                    /> 
                    <span>Giá thấp đến cao</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="radio" 
                      name="sort" 
                      id="sort-price-desc" 
                      checked={sortOption === 'price-desc'}
                      onChange={() => handleSortChange('price-desc')}
                    /> 
                    <span>Giá cao xuống thấp</span>
                  </label>
                </li>
              </ul>
            </div>
            
            <div className="promotion-banner-container">
              <img 
                src="/img/img_aside_banner.webp" 
                alt="Khuyến mãi lớn - Giảm 30% toàn bộ sản phẩm" 
                className="promotion-image-banner promotion-animate"
                onClick={() => window.location.href = '/khuyen-mai'} 
              />
            </div>
          </div>
          <div className="product-main" ref={productMainRef}>
            {loading ? (
              <div className="loading">Đang tải sản phẩm...</div>
            ) : (
              <>
                <div className="product-grid">
                  {currentProducts.length > 0 ? (
                    currentProducts.map(product => (
                      <div key={product.id} className="product-item">
                          <div className="product-image-wrapper">
                            <img src={product.image} alt={product.name} className="product-image" />
                          </div>
                          <h3 className="product-title">{product.name}</h3>
                          <div className="product-price">
                            <span className="current-price">{formatPrice(product.price)}</span>
                          </div>

                        {product.buttonType === "addToCart" && (
                          <button className="product-button custom-button">
                            <i className="fas fa-basket-shopping"></i> Thêm vào giỏ
                          </button>
                        )}
                        {product.buttonType === "customize" && (
                          <button className="product-button custom-button">
                            <i className="fas fa-cog"></i> Tùy chọn
                          </button>
                        )}
                        {product.buttonType === "buyNow" && (
                          <button className="product-button custom-button">
                            <i className="fas fa-bolt"></i> Mua ngay
                          </button>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="no-products-message">
                      <p>Không tìm thấy sản phẩm phù hợp với bộ lọc đã chọn.</p>
                    </div>
                  )}
                </div>    
                {sortedProducts.length > 0 && totalPages > 1 && (
                  <div className="pagination">
                    <button 
                      onClick={goToPreviousPage} 
                      disabled={currentPage === 1}
                      className="pagination-button"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                      >
                        {i + 1}
                      </button>
                    ))}                   
                    <button 
                      onClick={goToNextPage} 
                      disabled={currentPage === totalPages}
                      className="pagination-button">
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
