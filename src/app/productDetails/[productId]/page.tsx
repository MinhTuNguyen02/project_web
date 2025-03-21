"use client";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";


import "./productDetail_css.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetailPage() {
  return (
    <div className="page-wrapper">
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
}
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  category?: string[] | string;
  publisher: string;
  image: string;
  rating: number;
  inStock: boolean;
  buttonType: string;
  description?: string;
}


const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Bút Bi Thiên Long TL-027",
    price: 5000,
    originalPrice: 7000,
    category: ["but"],
    publisher: "oem",
    image: "/img/full1.webp",
    rating: 4.5,
    inStock: true,
    buttonType: "addToCart",
    description: "Bút bi Thiên Long TL-027 với thiết kế đơn giản, gọn nhẹ, thân bút được làm từ nhựa cao cấp. Mực bút êm, đều và lâu phai, phù hợp cho học sinh, sinh viên và nhân viên văn phòng."
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
    buttonType: "customize",
    description: "Sổ tay kẻ ngang khổ A5 với giấy mịn, dày 80gsm, bìa cứng chống thấm nước. Thiết kế trang nhã, phù hợp cho việc ghi chép, học tập và làm việc."
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
    buttonType: "addToCart",
    description: "Bút chì gỗ 2B chất lượng cao, thân bút làm từ gỗ tự nhiên, ruột chì mềm, đậm nét. Lý tưởng cho việc phác thảo, vẽ và ghi chép."
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
    buttonType: "addToCart",
    description: "Bút lông dầu Thiên Long PM-09 với đầu bút 0.7mm, cho nét viết đậm, rõ ràng và không thấm qua giấy. Phù hợp cho việc viết trên nhiều bề mặt khác nhau."
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
    buttonType: "addToCart",
    description: "Hộp kẹp giấy kim loại chất lượng cao, gồm 50 chiếc, kích thước đa dạng. Giúp sắp xếp tài liệu gọn gàng và chuyên nghiệp."
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
    buttonType: "customize",
    description: "Bút highlight màu pastel với 6 màu nhẹ nhàng, không làm nhòe mực khi đánh dấu. Thiết kế hiện đại, dễ cầm nắm và sử dụng."
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
    buttonType: "addToCart",
    description: "Sổ tay lò xo bìa cứng khổ B5, giấy định lượng 100gsm, không lem mực. Thiết kế lò xo chắc chắn, dễ dàng lật trang và ghi chép."
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
    buttonType: "addToCart",
    description: "Bút máy Lamy Safari cao cấp, thân bút làm từ nhựa ABS bền bỉ, ngòi bút mượt mà. Thiết kế hiện đại, sang trọng và chuyên nghiệp."
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
    buttonType: "addToCart",
    description: "Thước kẻ 30cm làm từ nhựa trong suốt, có độ chính xác cao và vạch chia rõ ràng. Phù hợp cho học sinh, sinh viên và văn phòng."
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
    buttonType: "addToCart",
    description: "Giấy note màu pastel với keo dính chất lượng cao, không để lại dấu vết. Có nhiều màu sắc nhẹ nhàng, dễ thương, phù hợp cho việc ghi chú."
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
    buttonType: "customize",
    description: "Hộp bút chì màu 24 màu sắc nét, sống động, ruột chì mềm và dễ tô. Phù hợp cho học sinh và người yêu thích nghệ thuật."
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
    buttonType: "addToCart",
    description: "Bìa kẹp hồ sơ khổ A4 làm từ nhựa PP bền bỉ, có gài kim loại chắc chắn. Giúp bảo quản và sắp xếp tài liệu gọn gàng, chuyên nghiệp."
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
    buttonType: "addToCart",
    description: "Sổ tay bìa da khổ A6 với giấy chất lượng cao, bìa da PU mềm mại, sang trọng. Thiết kế nhỏ gọn, dễ dàng mang theo."
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
    buttonType: "addToCart",
    description: "Bút xóa nước Correction Pen với đầu kim loại chính xác, mực xóa trắng mịn, khô nhanh. Thiết kế nhỏ gọn, dễ sử dụng và mang theo."
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
    buttonType: "customize",
    description: "Túi đựng bút làm từ vải canvas bền bỉ, nhiều ngăn tiện lợi. Thiết kế đơn giản, thời trang và phù hợp cho học sinh, sinh viên."
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
    buttonType: "addToCart",
    description: "Bút bi Thiên Long TL-027 với thiết kế đơn giản, gọn nhẹ, thân bút được làm từ nhựa cao cấp. Mực bút êm, đều và lâu phai, phù hợp cho học sinh, sinh viên và nhân viên văn phòng."
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
    buttonType: "customize",
    description: "Sổ tay kẻ ngang khổ A5 với giấy mịn, dày 80gsm, bìa cứng chống thấm nước. Thiết kế trang nhã, phù hợp cho việc ghi chép, học tập và làm việc."
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
    buttonType: "addToCart",
    description: "Bút chì gỗ 2B chất lượng cao, thân bút làm từ gỗ tự nhiên, ruột chì mềm, đậm nét. Lý tưởng cho việc phác thảo, vẽ và ghi chép."
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
    buttonType: "addToCart",
    description: "Bút lông dầu Thiên Long PM-09 với đầu bút 0.7mm, cho nét viết đậm, rõ ràng và không thấm qua giấy. Phù hợp cho việc viết trên nhiều bề mặt khác nhau."
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
    buttonType: "addToCart",
    description: "Hộp kẹp giấy kim loại chất lượng cao, gồm 50 chiếc, kích thước đa dạng. Giúp sắp xếp tài liệu gọn gàng và chuyên nghiệp."
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
    buttonType: "customize",
    description: "Bút highlight màu pastel với 6 màu nhẹ nhàng, không làm nhòe mực khi đánh dấu. Thiết kế hiện đại, dễ cầm nắm và sử dụng."
  },
];


function ProductDetail() {
    const params = useParams();
    const productId = params.productId as string;
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      const foundProduct = sampleProducts.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);

        let productCategories: string[] = [];
        if (foundProduct.category) {
          if (Array.isArray(foundProduct.category)) {
            productCategories = foundProduct.category;
          } else {
            productCategories = [foundProduct.category];
          }
        }

        const related = sampleProducts
          .filter(p => {
  
            let pCategories: string[] = [];
            if (p.category) {
              if (Array.isArray(p.category)) {
                pCategories = p.category;
              } else {
                pCategories = [p.category];
              }
            }
            
            return p.id !== productId && 
                   pCategories.some(cat => productCategories.includes(cat));
          })
          .slice(0, 4); 
        
        setRelatedProducts(related);
      }
    }, [productId]);
  
    const formatPrice = (price: number) => {
      return price.toLocaleString('vi-VN') + ' ₫';
    };
  
    const handleIncreaseQuantity = () => {
      setQuantity(prev => prev + 1);
    };
  
    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(prev => prev - 1);
      }
    };
  
    const renderStars = (rating: number) => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 >= 0.5;
      
      for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
      }
      
      if (halfStar) {
        stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
      }
      
      const emptyStars = 5 - stars.length;
      for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
      }
      
      return stars;
    };
  
    if (!product) {
      return (
        <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
          <h2>Không tìm thấy sản phẩm</h2>
          <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link href="/allProducts">
            <button className="custom-button" style={{ marginTop: '20px' }}>
              Quay lại trang sản phẩm
            </button>
          </Link>
        </div>
      );
    }
  
    return (
        <div className="productDetailPage">
          <div className="productBanner">
            <div className="breadcrumb">
              <Link href="/">Trang chủ</Link>
              <span className="separator">/</span>
              <span>{product.name}</span>
            </div>
            <h1 className="bannerTitle">{product.name.toUpperCase()}</h1>
          </div>
      
          <div className="container">
            <div className="productDetailContent">
              <div className="productGallery">
                <div className="mainImage">
                  <img src={product.image} alt={product.name} />
                  <button className="wishlistButton">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
                <div className="thumbnailList">
                  <div className="thumbnailItem">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>
              </div>

              <div className="productInfo">
                <h1 className="productTitle">{product.name}</h1>
                <div className="productPrice">{formatPrice(product.price)}</div>
                
                <div className="productMeta">
                  <div className="metaItem">
                    <span className="metaLabel">Mã sản phẩm:</span>
                    <span className="metaValue">Đang cập nhật</span>
                  </div>
                  <div className="metaItem">
                    <span className="metaLabel">Tác giả:</span>
                    <span className="metaValue">Đang cập nhật</span>
                  </div>
                  <div className="metaItem">
                    <span className="metaLabel">Tình trạng:</span>
                    <span className="metaValue">{product.inStock ? 'Còn hàng' : 'Hết hàng'}</span>
                  </div>
                </div>
                
                <div className="productDescription">
                  <p>{product.description || 'Notebook 32 trang nhỏ xinh tiện lợi, quà tặng văn phòng phẩm giá rẻ'}</p>
                </div>

                <div className="productOptionsWrapper">
                  <div className="productOptions">
                    <label className="optionLabel">Mẫu</label>
                    <div className="colorOptions">
                      <div className="colorOption selected">Gấy Happy</div>
                      <div className="colorOption">Bò sữa</div>
                      <div className="colorOption">Con đồ ăn</div>
                      <div className="colorOption">Gấu cute</div>
                      <div className="colorOption">Thỏ ciu</div>
                    </div>
                  </div>

                  <div className="quantity-policy-wrapper">

                    <div className="left-column">
                      {/* Số lượng */}
                      <div className="quantityWrapper">
                        <label className="optionLabel">Số lượng:</label>
                        <div className="quantitySelector">
                          <button className="quantityBtn" onClick={handleDecreaseQuantity}>-</button>
                          <input 
                            type="text" 
                            className="quantityInput" 
                            value={quantity} 
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                          />
                          <button className="quantityBtn" onClick={handleIncreaseQuantity}>+</button>
                        </div>
                      </div>
                      
                      {/* Các nút mua hàng */}
                      <div className="productActions">
                        <button className="btnAddToCart">Thêm vào giỏ hàng</button>
                        <button className="btnBuyNow">Mua ngay</button>
                      </div>
                    </div>
                    
                    {/* Phần bên phải - chính sách mua hàng */}
                    <div className="right-column">
                      <div className="policy-container">
                        <div className="policy-item">
                          <img src="/img/service_1.webp" alt="Giao hàng" className="policy-icon" />
                          <div className="policy-content">
                            <h4>GIAO HÀNG FREE NỘI THÀNH</h4>
                            <p>Giao free trong nội thành HN và HCM</p>
                          </div>
                        </div>
                        
                        <div className="policy-item">
                          <img src="/img/service_2.webp" alt="Trả hàng" className="policy-icon" />
                          <div className="policy-content">
                            <h4>TRẢ HÀNG TRONG VÒNG 24H</h4>
                            <p>Hỗ trợ trả hàng cho khách khi sản phẩm có lỗi</p>
                          </div>
                        </div>
                        
                        <div className="policy-item">
                          <img src="/img/service_3.webp" alt="Kiểm tra" className="policy-icon" />
                          <div className="policy-content">
                            <h4>KIỂM TRA HÀNG KHI NHẬN HÀNG</h4>
                            <p>Khách hàng kiểm tra hàng trước khi nhận</p>
                          </div>
                        </div>
                        
                        <div className="policy-item">
                          <img src="/img/service_4.webp" alt="COD" className="policy-icon" />
                          <div className="policy-content">
                            <h4>THANH TOÁN COD</h4>
                            <p>Hỗ trợ khách hàng thanh toán cod</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Ưu đãi liên quan */}
                <div className="promotions">
                  <span className="promotionTitle">Ưu đãi liên quan:</span>
                  <div className="promotionItem">
                    <i className="fas fa-check-circle promotionIcon"></i>
                    <span className="promotionText">Giao hàng miễn phí nội thành</span>
                  </div>
                  <div className="promotionItem">
                    <i className="fas fa-check-circle promotionIcon"></i>
                    <span className="promotionText">Đổi trả trong vòng 24h</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sản phẩm nổi bật */}
            <div className="featuredProducts">
              <h3 className="featuredTitle">DANH SÁCH NỔI BẬT</h3>
              <div className="featuredItem">
                <div className="featuredImage">
                  <img src="/img/featured1.jpg" alt="Sản phẩm nổi bật" />
                </div>
                <div className="featuredInfo">
                  <div className="featuredName">Vở viết kẻ ngang nhiễm...</div>
                  <div className="featuredPrice">12.000₫ <span className="featuredOriginalPrice">41.000₫</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );      
  }