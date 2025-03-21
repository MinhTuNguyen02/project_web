"use client";
import "./product_css.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useRef, useEffect } from "react";

import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header/>
      <ProductPage/>
      <Footer/>
    </div>
  );
}

function ProductPage() {

  const [isOpenCategory, setIsOpenCategory] = useState(true);
  const [isOpenPublisher, setIsOpenPublisher] = useState(true);
  const [isOpenPrice, setIsOpenPrice] = useState(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; 
  

  const [sortOption, setSortOption] = useState('default'); // 'default', 'name-az', 'name-za', 'price-asc', 'price-desc'
  

  const [selectedCategories, setSelectedCategories] = useState({
    'bia-kep': false,
    'but': false,
    'but-xoa': false,
    'hop': false,
    'la': false,
    'may-tinh': false,
    'nhan-dan': false,
    'so-tay': false,
    'tui-dung': false,
    'vo': false
  });

  const categoryDisplayNames = {
    'bia-kep': 'Bìa kẹp',
    'but': 'Bút',
    'but-xoa': 'Bút xóa',
    'hop': 'Hộp',
    'la': 'Lá',
    'may-tinh': 'Máy tính',
    'nhan-dan': 'Nhãn dán',
    'so-tay': 'Sổ tay',
    'tui-dung': 'Túi đựng',
    'vo': 'Vở',
    'balo': 'Balo',
    'boc-vo': 'Bọc vở',
    'nhan-vo': 'Nhãn vở',
    'tay': 'Tẩy'
  };


  const [selectedPublishers, setSelectedPublishers] = useState({
    'oem': false,
    'stationery': false
  });


  const toggleCategory = () => setIsOpenCategory(!isOpenCategory);
  const togglePublisher = () => setIsOpenPublisher(!isOpenPublisher);
  const togglePrice = () => setIsOpenPrice(!isOpenPrice);
  

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setCurrentPage(1);
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };
  
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories({
      ...selectedCategories,
      [categoryId]: !selectedCategories[categoryId as keyof typeof selectedCategories]
    });
    setCurrentPage(1);
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };
  
  const handlePublisherChange = (publisherId: string) => {
    setSelectedPublishers({
      ...selectedPublishers,
      [publisherId]: !selectedPublishers[publisherId as keyof typeof selectedPublishers]
    });
    setCurrentPage(1);
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const sampleProducts = [
    {
      id: "1",
      name: "Bút Bi Thiên Long TL-027",
      price: 5000,
      originalPrice: 7000,
      category:  ["but"],
      publisher: "oem",
      image: "/img/full1.webp",
      rating: 4.5,
      inStock: true,
      buttonType: "addToCart" 
    },
    {
      id: "2",
      name: "Sổ Tay Kẻ Ngang A5",
      price: 35000,
      originalPrice: 45000,
      category: ["so-tay"],
      publisher: "stationery",
      image: "/img/id1.webp",
      rating: 4.2,
      inStock: true,
      buttonType: "customize"
    },
    {
      id: "3",
      name: "Bút Chì Gỗ 2B",
      price: 3000,
      originalPrice: 4000,
      category: ["but"],
      publisher: "oem",
      image: "/img/id2.webp",
      rating: 4.0,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "4",
      name: "Bút Lông Dầu Thiên Long PM-09",
      price: 12000,
      originalPrice: 15000,
      category: ["but"],
      publisher: "oem",
      image: "/img/id3.webp",
      rating: 4.7,
      inStock: false,
      buttonType: "addToCart"
    },
    {
      id: "5",
      name: "Kẹp Giấy Kim Loại (Hộp 50 Cái)",
      price: 25000,
      originalPrice: 30000,
      category: ["bia-kep"],
      publisher: "stationery",
      image: "/img/sp1.webp",
      rating: 3.8,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "6",
      name: "Bút Highlight Pastel",
      price: 15000,
      originalPrice: 20000,
      category: ["but"],
      publisher: "oem",
      image: "/img/sp2.webp",
      rating: 4.6,
      inStock: true,
      buttonType: "customize"
    },
    {
      id: "7",
      name: "Sổ Tay Lò Xo Bìa Cứng B5",
      price: 55000,
      originalPrice: 70000,
      category: ["so-tay","vo"],
      publisher: "stationery",
      image: "/img/sp3.webp",
      rating: 4.3,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "8",
      name: "Bút Máy Lamy Safari",
      price: 450000,
      originalPrice: 500000,
      category: ["but"],
      publisher: "oem",
      image: "/img/sp4.webp",
      rating: 4.9,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "9",
      name: "Thước Kẻ 30cm",
      price: 8000,
      originalPrice: 10000,
      category: ["la"],
      publisher: "stationery",
      image: "/img/full1.webp",
      rating: 4.0,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "10",
      name: "Giấy Note Màu Pastel",
      price: 15000,
      originalPrice: 20000,
      category: ["vo","la"],
      publisher: "stationery",
      image: "/img/id1.webp",
      rating: 4.2,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "11",
      name: "Hộp Bút Chì Màu 24 Màu",
      price: 75000,
      originalPrice: 90000,
      category: ["but"],
      publisher: "oem",
      image: "/img/id2.webp",
      rating: 4.7,
      inStock: true,
      buttonType: "customize"
    },
    {
      id: "12",
      name: "Bìa Kẹp Hồ Sơ A4",
      price: 18000,
      originalPrice: 25000,
      category: ["bia-kep"],
      publisher: "stationery",
      image: "/img/id3.webp",
      rating: 4.1,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "13",
      name: "Sổ Tay Bìa Da A6",
      price: 65000,
      originalPrice: 80000,
      category: ["so-tay"],
      publisher: "stationery",
      image: "/img/sp1.webp",
      rating: 4.5,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "14",
      name: "Bút Xóa Nước Correction Pen",
      price: 22000,
      originalPrice: 28000,
      category: ["but","but-xoa"],
      publisher: "oem",
      image: "/img/sp2.webp",
      rating: 4.0,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "15",
      name: "Túi Đựng Bút Canvas",
      price: 45000,
      originalPrice: 60000,
      category: ["tui-dung"],
      publisher: "stationery",
      image: "/img/sp3.webp",
      rating: 4.3,
      inStock: true,
      buttonType: "customize"
    },
    {
      id: "16",
      name: "Bút Bi Thiên Long TL-027",
      price: 5000,
      originalPrice: 7000,
      category: ["but"],
      publisher: "oem",
      image: "/img/full1.webp",
      rating: 4.5,
      inStock: true,
      buttonType: "addToCart" 
    },
    {
      id: "17",
      name: "Sổ Tay Kẻ Ngang A5",
      price: 35000,
      originalPrice: 45000,
      category: ["so-tay","vo"],
      publisher: "stationery",
      image: "/img/id1.webp",
      rating: 4.2,
      inStock: true,
      buttonType: "customize"
    },
    {
      id: "18",
      name: "Bút Chì Gỗ 2B",
      price: 3000,
      originalPrice: 4000,
      category: ["but"],
      publisher: "oem",
      image: "/img/id2.webp",
      rating: 4.0,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "19",
      name: "Bút Lông Dầu Thiên Long PM-09",
      price: 12000,
      originalPrice: 15000,
      category: ["but"],
      publisher: "oem",
      image: "/img/id3.webp",
      rating: 4.7,
      inStock: false,
      buttonType: "addToCart"
    },
    {
      id: "20",
      name: "Kẹp Giấy Kim Loại (Hộp 50 Cái)",
      price: 25000,
      originalPrice: 30000,
      category: ["bia-kep"],
      publisher: "stationery",
      image: "/img/sp1.webp",
      rating: 3.8,
      inStock: true,
      buttonType: "addToCart"
    },
    {
      id: "21",
      name: "Bút Highlight Pastel",
      price: 15000,
      originalPrice: 20000,
      category: ["but"],
      publisher: "oem",
      image: "/img/sp2.webp",
      rating: 4.6,
      inStock: true,
      buttonType: "customize"
    },
  ];

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    category?: string[] | string;
    categories?: string[]; 
    publisher: string;
    image: string;
    rating: number;
    inStock: boolean;
    buttonType: string;
  }

  interface CategoryMapping {
    'bia-kep': string;
    'but': string;
    'but-xoa': string;
    'hop': string;
    'la': string;
    'may-tinh': string;
    'nhan-dan': string;
    'so-tay': string;
    'tui-dung': string;
    'vo': string

    [key: string]: string; 
  }

  const filterProducts = (products: Product[]) => {
    const selectedCategoryIds = Object.entries(selectedCategories)
      .filter(([_, isSelected]) => isSelected)
      .map(([categoryId, _]) => categoryId);
    
    const selectedPublisherIds = Object.entries(selectedPublishers)
      .filter(([_, isSelected]) => isSelected)
      .map(([publisherId, _]) => publisherId);
    
    if (selectedCategoryIds.length === 0 && selectedPublisherIds.length === 0) {
      return products;
    }
    
    return products.filter(product => {
      let productCategories: string[] = [];
      
      if (product.categories) {
        productCategories = product.categories;
      } else if (product.category) {
        if (Array.isArray(product.category)) {
          productCategories = product.category;
        } else {
          productCategories = [product.category];
        }
      }

      const categoryMatch = selectedCategoryIds.length === 0 || 
        selectedCategoryIds.every(categoryId => 
          productCategories.includes(categoryId)
        );
      const publisherMatch = selectedPublisherIds.length === 0 || 
        selectedPublisherIds.includes(product.publisher);
      
      return categoryMatch && publisherMatch;
    });
  };

  const sortProducts = (products: Product[]) => {
    switch (sortOption) {
      case 'name-az':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-za':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const filteredProducts = filterProducts(sampleProducts);
  const sortedProducts = sortProducts(filteredProducts);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber:number) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };
  
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const productMainRef = useRef<HTMLDivElement>(null); 


  const scrollToTop = () => {
    if (productMainRef.current) {
      productMainRef.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'     
      });
    }
  };

  const formatPrice = (price:number) => {
    return price.toLocaleString('vi-VN') + ' ₫';
  };

  return (
    <div className="page_product">
      <div className="news-banner">
        <div className="breadcrumb">
          <span>Trang chủ </span><span className="separator">/</span><span> Tất cả sản phẩm</span>
        </div>
        <h1 className="banner-title">TẤT CẢ SẢN PHẨM</h1>
      </div>
      
      <div className="container">
        <div className="product-container">

          <div className="product-sidebar">
            <div className={`filter-section ${isOpenCategory ? 'open' : ''}`}>
              <h3 onClick={toggleCategory} className="filter-title">
                THỂ LOẠI SÁCH
                <i className="fas fa-chevron-down"></i>
              </h3>
              <ul className="category-list">
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="bia-kep"
                      checked={selectedCategories['bia-kep']}
                      onChange={() => handleCategoryChange('bia-kep')}
                    />
                    <span>Bìa kẹp</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="but"
                      checked={selectedCategories['but']}
                      onChange={() => handleCategoryChange('but')}
                    />
                    <span>Bút</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="but-xoa"
                      checked={selectedCategories['but-xoa']}
                      onChange={() => handleCategoryChange('but-xoa')}
                    />
                    <span>Bút xóa</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="hop"
                      checked={selectedCategories['hop']}
                      onChange={() => handleCategoryChange('hop')}
                    /> 
                    <span>Hộp</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="la"
                      checked={selectedCategories['la']}
                      onChange={() => handleCategoryChange('la')}
                    /> 
                    <span>Lá</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="may-tinh"
                      checked={selectedCategories['may-tinh']}
                      onChange={() => handleCategoryChange('may-tinh')}
                    /> 
                    <span>Máy tính</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="nhan-dan"
                      checked={selectedCategories['nhan-dan']}
                      onChange={() => handleCategoryChange('nhan-dan')}
                    /> 
                    <span>Nhãn dán</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="so-tay"
                      checked={selectedCategories['so-tay']}
                      onChange={() => handleCategoryChange('so-tay')}
                    /> 
                    <span>Sổ tay</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="tui-dung"
                      checked={selectedCategories['tui-dung']}
                      onChange={() => handleCategoryChange('tui-dung')}
                    /> 
                    <span>Túi đựng</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="vo"
                      checked={selectedCategories['vo']}
                      onChange={() => handleCategoryChange('vo')}
                    /> 
                    <span>Vở</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className={`filter-section ${isOpenPublisher ? 'open' : ''}`}>
              <h3 onClick={togglePublisher} className="filter-title">
                NHÀ XUẤT BẢN
                <i className="fas fa-chevron-down"></i>
              </h3>
              <ul className="category-list">
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="oem"
                      checked={selectedPublishers['oem']}
                      onChange={() => handlePublisherChange('oem')}
                    /> 
                    <span>OEM</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      type="checkbox" 
                      id="stationery"
                      checked={selectedPublishers['stationery']}
                      onChange={() => handlePublisherChange('stationery')}
                    /> 
                    <span>Stationery</span>
                  </label>
                </li>
              </ul>
            </div>
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
            <div className="product-grid">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div key={product.id} className="product-item">
                    <div className="product-image-wrapper">
                      <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-price">
                      <span className="current-price">{formatPrice(product.price)}</span>
                    </div>
                    {product && "buttonType" in product && product.buttonType === "addToCart" && (
                    <button className="product-button custom-button">
                      <i className="fas fa-basket-shopping"></i> Thêm vào giỏ
                    </button>
                  )}
                    {product && "buttonType" in product && product.buttonType=== "customize" && (
                      <button className="product-button custom-button">
                        <i className="fas fa-cog"></i> Tùy chọn
                      </button>
                    )}
                    {product && "buttonType" in product && product.buttonType=== "buyNow" && (
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
                  className="pagination-button"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
