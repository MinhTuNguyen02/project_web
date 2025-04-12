"use client";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import "./productDetail_css.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchProductAPI, fetchProductByIdAPI } from "@/app/api/index";

function ProductDetailPage() {
  return (
    <div className="page-wrapper">
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
}

function ProductDetail() {
  const params = useParams();
  const productId = params.productId;
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true)
      try {
        // Lấy chi tiết sản phẩm
        const foundProduct = await fetchProductByIdAPI(productId)
        setProduct(foundProduct)
  
        // Lấy sản phẩm liên quan
        const related = await fetchProductAPI(foundProduct.categoryId)
        setRelatedProducts(
          related
            .filter((p) => p._id !== productId)
            .slice(0, 4)
        );
      } catch (err) {
        setError('Không thể tải sản phẩm')
      } finally {
        setLoading(false);
      }
    };
    loadProduct()
  }, [productId])

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + "₫";
  };

  const handleIncreaseQuantity = () => {
    if (product && quantity < product.inventory) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Giả lập thêm vào giỏ hàng
    alert(`Đã thêm ${quantity} ${product.productName} vào giỏ hàng!`);
  };

  const handleBuyNow = () => {
    // Giả lập mua ngay
    alert(`Đang xử lý mua ngay ${quantity} ${product.productName}!`);
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: "50px 0", textAlign: "center" }}>
        <h2>Đang tải sản phẩm...</h2>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container" style={{ padding: "50px 0", textAlign: "center" }}>
        <h2>Không tìm thấy sản phẩm</h2>
        <p>{error || "Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."}</p>
        <Link href="/allProducts">
          <button className="custom-button" style={{ marginTop: "20px" }}>
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
          <span>{product.productName}</span>
        </div>
        <h1 className="bannerTitle">{product.productName.toUpperCase()}</h1>
      </div>

      <div className="container">
        <div className="productDetailContent">
          <div className="productGallery">
            <div className="top-cont">
              <div className="top-cont-left">
                <div className="mainImage">
                  <img
                    src={product.img[0] || "/img/placeholder.jpg"}
                    alt={product.productName}
                  />
                  <button className="wishlistButton">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>

                <div className="thumbnailList">
                  {product.img.slice(0, 4).map((img, index) => (
                    <div key={index} className="thumbnailItem">
                      <img src={img} alt={`${product.productName} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="top-cont-right">
                <h1 className="productTitle">{product.productName}</h1>
                <div className="productPrice">{formatPrice(product.price)}</div>

                <div className="productMeta">
                  <div className="metaItem">
                    <span className="metaLabel">Mã sản phẩm:</span>
                    <span className="metaValue">{product._id}</span>
                  </div>
                  <div className="metaItem">
                    <span className="metaLabel">Tình trạng:</span>
                    <span className="metaValue">
                      {product.inventory > 0 ? "Còn hàng" : "Hết hàng"}
                    </span>
                  </div>
                </div>            

                <div className="productOptionsWrapper">
                  <div className="quantity-policy-wrapper">
                    <div className="left-column">
                      <div className="quantityWrapper">
                        <label className="optionLabel">Số lượng:</label>
                        <div className="quantitySelector">
                          <button
                            className="quantityBtn"
                            onClick={handleDecreaseQuantity}
                            disabled={quantity <= 1}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="quantityInput"
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(
                                Math.max(1, Math.min(parseInt(e.target.value) || 1, product.inventory))
                              )
                            }
                          />
                          <button
                            className="quantityBtn"
                            onClick={handleIncreaseQuantity}
                            disabled={quantity >= product.inventory}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="productActions">
                    <button
                      className="btnAddToCart"
                      onClick={handleAddToCart}
                      disabled={product.inventory === 0}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <button
                      className="btnBuyNow"
                      onClick={handleBuyNow}
                      disabled={product.inventory === 0}
                    >
                      Mua ngay
                    </button>
                  </div>
                </div>

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
            <div className="productDescription">
              <h1>Thông tin chi tiết</h1>
              <div style={{ whiteSpace: "pre-wrap", fontSize: 15, marginTop: 15 }}>
                {product.description || "Không có mô tả cho sản phẩm này."}
              </div>
            </div>
          </div>

          <div className="productInfo">            
            {/* <div className="right-column"> */}
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

              {relatedProducts.length > 0 && (
                <div className="relatedProducts">
                  <h4 className="relatedTitle">SẢN PHẨM LIÊN QUAN</h4>
                  <div className="relatedGrid">
                    {relatedProducts.map((related) => (
                      <Link key={related._id} href={`/productDetails/${related._id}`} style={{textDecoration: 'none'}}>
                        <div className="relatedItem">
                          <div className="relatedImage">
                            <img
                              src={related.img[0] || "/img/placeholder.jpg"}
                              alt={related.productName}
                            />
                          </div>
                          <div className="relatedInfo">
                            <div className="relatedName">{related.productName}</div>
                            <div className="relatedPrice">{formatPrice(related.price)}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            {/* </div> */}
          </div>          
        </div>        
      </div>
    </div>
  );
}

export default ProductDetailPage;