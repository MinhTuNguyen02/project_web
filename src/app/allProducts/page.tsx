"use client";
import "./product_css.css";
import "../resetCss.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchCategoryAPI, fetchProductAPI } from "../api/index"; // Import API

import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  );
}

function ProductPage() {
  const router = useRouter();
  const productMainRef = useRef(null);

  const [isOpenCategory, setIsOpenCategory] = useState(true);
  const [isOpenPrice, setIsOpenPrice] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const [sortOption, setSortOption] = useState("default");
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleCategory = () => setIsOpenCategory(!isOpenCategory);
  const togglePrice = () => setIsOpenPrice(!isOpenPrice);

  const handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
    setTimeout(() => scrollToTop(), 100);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1);
    setTimeout(() => scrollToTop(), 100);
  };

  const navigateToProductDetail = (productId) => {
    router.push(`/productDetails/${productId}`);
  };

  // Lấy danh mục
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategoryAPI();
        setCategories(data);
      } catch (err) {
        setError("Không thể tải danh mục");
      }
    };
    loadCategories();
  }, []);

  // Lấy sản phẩm
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProductAPI(selectedCategoryId);
        setProducts(data);
      } catch (err) {
        setError("Không thể tải sản phẩm");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [selectedCategoryId]);

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    if (productMainRef.current) {
      productMainRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Sắp xếp sản phẩm
  const sortProducts = (products) => {
    switch (sortOption) {
      case "name-az":
        return [...products].sort((a, b) => a.productName.localeCompare(b.productName));
      case "name-za":
        return [...products].sort((a, b) => b.productName.localeCompare(a.productName));
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + " ₫";
  };

  return (
    <div className="page_product">
      <div className="news-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>Tất cả sản phẩm</span>
        </div>
        <h1 className="banner-title">TẤT CẢ SẢN PHẨM</h1>
      </div>

      <div className="container">
        <div className="product-container">
          <div className="product-sidebar">
            <div className={`filter-section ${isOpenCategory ? "open" : ""}`}>
              <h3 onClick={toggleCategory} className="filter-title">
                DANH MỤC
                <i className="fas fa-chevron-down"></i>
              </h3>
              <ul className="category-list">
                <li>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      id="all-categories"
                      checked={selectedCategoryId === ""}
                      onChange={() => handleCategoryChange("")}
                    />
                    <span>Tất cả</span>
                  </label>
                </li>
                {categories.map((category) => (
                  <li key={category._id}>
                    <label>
                      <input
                        type="radio"
                        name="category"
                        id={category._id}
                        checked={selectedCategoryId === category._id}
                        onChange={() => handleCategoryChange(category._id)}
                      />
                      <span>{category.categoryName}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`filter-section ${isOpenPrice ? "open" : ""}`}>
              <h3 onClick={togglePrice} className="filter-title">
                SẮP XẾP
                <i className="fas fa-chevron-down"></i>
              </h3>
              <ul className="category-list">
                <li>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="sort-default"
                      checked={sortOption === "default"}
                      onChange={() => handleSortChange("default")}
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
                      checked={sortOption === "name-az"}
                      onChange={() => handleSortChange("name-az")}
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
                      checked={sortOption === "name-za"}
                      onChange={() => handleSortChange("name-za")}
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
                      checked={sortOption === "price-asc"}
                      onChange={() => handleSortChange("price-asc")}
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
                      checked={sortOption === "price-desc"}
                      onChange={() => handleSortChange("price-desc")}
                    />
                    <span>Giá cao xuống thấp</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-main" ref={productMainRef}>
            {loading && <p>Đang tải sản phẩm...</p>}
            {error && <p className="error">{error}</p>}
            <div className="product-grid">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div key={product._id} className="product-item">
                    <div
                      className="product-image-wrapper"
                      onClick={() => navigateToProductDetail(product._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={product.img[0] || "/img/placeholder.jpg"}
                        alt={product.productName}
                        className="product-image"
                      />
                    </div>
                    <h3
                      className="product-title"
                      onClick={() => navigateToProductDetail(product._id)}
                      style={{ cursor: "pointer" }}
                    >
                      {product.productName}
                    </h3>
                    <div
                      className="product-price"
                      onClick={() => navigateToProductDetail(product._id)}
                      style={{ cursor: "pointer" }}
                    >
                      <span className="current-price">{formatPrice(product.price)}</span>
                    </div>
                    <button className="product-button custom-button">
                      <i className="fas fa-basket-shopping"></i> Thêm vào giỏ
                    </button>
                  </div>
                ))
              ) : (
                <div className="no-products-message">
                  <p>Không tìm thấy sản phẩm.</p>
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
                    className={`pagination-button ${currentPage === i + 1 ? "active" : ""}`}
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
