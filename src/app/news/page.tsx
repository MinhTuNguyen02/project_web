"use client"
import "./news_css.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import React, { useState, useRef } from "react"

import Header from "../component/Header"
import Footer from "../component/Footer"

export default function Home() {
  return (
    <div>
      <Header/>
      <NewsPage/>
      <Footer/>
    </div>
  )
}

function NewsPage() {
  const [activeTab, setActiveTab] = useState<"latest" | "popular">("latest")
  const [currentPage, setCurrentPage] = useState(1)
  const newsContentRef = useRef<HTMLDivElement>(null)

  const handleTabChange = (tab: "latest" | "popular") => {
    setActiveTab(tab)
    setCurrentPage(1) 

    if (newsContentRef.current) {
      newsContentRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)

    if (newsContentRef.current) {
      newsContentRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const latestNews = [
    {
      id: 1,
      title: "Những món văn phòng phẩm không thể thiếu cho học sinh",
      summary: "Khám phá những món văn phòng phẩm cần thiết giúp học sinh học tập hiệu quả trong năm học mới.",
      date: "05/03/2025",
      image: "img/id1.webp"
    },
    {
      id: 2,
      title: "Top 10 sản phẩm văn phòng phẩm bán chạy nhất tháng 3",
      summary: "Cập nhật danh sách những sản phẩm văn phòng phẩm được yêu thích và bán chạy nhất trong tháng 3/2025.",
      date: "01/03/2025",
      image: "img/id2.webp"
    },
    {
      id: 3,
      title: "Hướng dẫn chọn bút máy phù hợp cho người mới bắt đầu",
      summary: "Những tiêu chí quan trọng giúp bạn lựa chọn được chiếc bút máy phù hợp với nhu cầu và ngân sách.",
      date: "28/02/2025",
      image: "img/id3.webp"
    },
    {
      id: 7,
      title: "Cách bảo quản sổ tay và nhật ký trong mùa mưa",
      summary: "Những mẹo hữu ích giúp bảo quản sổ tay và nhật ký của bạn luôn như mới trong điều kiện thời tiết ẩm ướt.",
      date: "25/02/2025",
      image: "img/foryou1.webp"
    },
    {
      id: 8,
      title: "Văn phòng phẩm thân thiện với môi trường đang lên ngôi",
      summary: "Xu hướng sử dụng các sản phẩm văn phòng phẩm tái chế và thân thiện với môi trường ngày càng được ưa chuộng.",
      date: "20/02/2025",
      image: "img/sp1.webp"
    },
    {
      id: 9,
      title: "Những bộ sưu tập bút giới hạn đáng sở hữu năm 2025",
      summary: "Điểm qua những bộ sưu tập bút cao cấp giới hạn đang được săn đón bởi các nhà sưu tập trong năm nay.",
      date: "15/02/2025",
      image: "img/sp2.webp"
    },
    {
      id: 10,
      title: "Cách tổ chức không gian làm việc hiệu quả với văn phòng phẩm",
      summary: "Những gợi ý giúp bạn sắp xếp và tổ chức không gian làm việc gọn gàng, khoa học với các sản phẩm văn phòng phẩm.",
      date: "10/02/2025",
      image: "img/id3.webp"
    },
    {
      id: 11,
      title: "Lịch sử phát triển của bút bi và tác động đến xã hội",
      summary: "Hành trình phát triển của bút bi từ khi ra đời đến nay và những ảnh hưởng của nó đến đời sống con người.",
      date: "05/02/2025",
      image: "img/sp2.webp"
    },
    {
      id: 12,
      title: "Nghệ thuật Bullet Journal và cách bắt đầu",
      summary: "Tìm hiểu về phương pháp sắp xếp công việc Bullet Journal và cách bắt đầu với chỉ một cuốn sổ và bút.",
      date: "01/02/2025",
      image: "img/id1.webp"
    }
  ]

  const popularNews = [
    {
      id: 4,
      title: "Xu hướng văn phòng phẩm năm 2025",
      summary: "Khám phá những xu hướng văn phòng phẩm mới nhất đang được ưa chuộng trong năm 2025.",
      date: "20/02/2025",
      image: "img/id1.webp"
    },
    {
      id: 5,
      title: "5 cách trang trí góc làm việc với văn phòng phẩm",
      summary: "Những ý tưởng sáng tạo giúp không gian làm việc của bạn trở nên sinh động và truyền cảm hứng hơn.",
      date: "15/02/2025",
      image: "img/sp2.webp"
    },
    {
      id: 6,
      title: "Lợi ích của việc sử dụng sổ tay giấy trong thời đại số",
      summary: "Tại sao nhiều người vẫn chọn ghi chép bằng sổ tay giấy dù công nghệ số đang phát triển mạnh mẽ.",
      date: "10/02/2025",
      image: "img/id3.webp"
    },
    {
      id: 13,
      title: "Top 5 thương hiệu bút cao cấp được yêu thích nhất",
      summary: "Điểm qua những thương hiệu bút cao cấp được người dùng đánh giá cao về chất lượng và trải nghiệm sử dụng.",
      date: "25/01/2025",
      image: "img/sp2.webp"
    },
    {
      id: 14,
      title: "Văn phòng phẩm vintage - Xu hướng hoài cổ đang quay trở lại",
      summary: "Sức hút của những món văn phòng phẩm mang phong cách vintage đang ngày càng được ưa chuộng.",
      date: "20/01/2025",
      image: "img/foryou1.webp"
    },
    {
      id: 15,
      title: "Cách chọn giấy in chất lượng cao cho văn phòng",
      summary: "Những tiêu chí quan trọng giúp bạn lựa chọn được loại giấy in phù hợp với nhu cầu sử dụng.",
      date: "15/01/2025",
      image: "img/id3.webp"
    },
    {
      id: 16,
      title: "Nghệ thuật Calligraphy và những dụng cụ cần thiết để bắt đầu",
      summary: "Tìm hiểu về nghệ thuật viết chữ đẹp và những dụng cụ cơ bản dành cho người mới bắt đầu.",
      date: "10/01/2025",
      image: "img/id2.webp"
    },
    {
      id: 17,
      title: "Cách lựa chọn balo và túi đựng laptop phù hợp",
      summary: "Những gợi ý giúp bạn chọn được chiếc balo hoặc túi đựng laptop vừa thời trang vừa bảo vệ thiết bị tốt.",
      date: "05/01/2025",
      image: "img/foryou1.webp"
    },
    {
      id: 18,
      title: "Tác động của màu sắc văn phòng phẩm đến tâm lý làm việc",
      summary: "Nghiên cứu về ảnh hưởng của màu sắc văn phòng phẩm đến tâm trạng và hiệu suất làm việc.",
      date: "01/01/2025",
      image: "img/sp2.webp"
    }
  ]

  const itemsPerPage = 3

  const currentData = activeTab === "latest" ? latestNews : popularNews
  
  const totalPages = Math.ceil(currentData.length / itemsPerPage)

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return currentData.slice(startIndex, endIndex)
  }

  const currentNewsData = getCurrentPageData()

  return (
    <div className="page_news">
      <div className="container">
      <div className="news-banner">
      <div className="breadcrumb">
        <span>Trang chủ</span><span className="separator">/</span><span>Tất cả tin tức</span>
        </div>
            <h1 className="banner-title">TẤT CẢ TIN TỨC</h1>
        </div>
        <div className="news-box-shadow">
          
          <div className="news-tabs" ref={newsContentRef}>
            <button
              className={`news-tab ${activeTab === "latest" ? "active" : ""}`}
              onClick={() => handleTabChange("latest")}
            >
              Tin mới nhất
            </button>
            <button
              className={`news-tab ${activeTab === "popular" ? "active" : ""}`}
              onClick={() => handleTabChange("popular")}
            >
              Tin phổ biến
            </button>
          </div>

          <div className="news-content">
            <div className="news-list">
              {currentNewsData.map(news => (
                <div key={news.id} className="news-item">
                  <div className="news-image">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="news-info">
                    <h3 className="news-title">{news.title}</h3>
                    <div className="news-date">
                      <i className="far fa-calendar-alt"></i> {news.date}
                    </div>
                    <p className="news-summary">{news.summary}</p>
                    <a href={`/tin-tuc/${news.id}`} className="read-more">
                      Đọc tiếp <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <span
                key={index + 1}
                className={`page ${currentPage === index + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(index + 1)}
                style={{ cursor: "pointer" }}
              >
                {index + 1}
              </span>
            ))}
            <span
              className="next"
              onClick={() => {
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1)
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-angle-right"></i>
            </span>
          </div>

          <div className="news-subscribe">
            <h3>Đăng ký nhận tin</h3>
            <p>Nhận thông báo về các tin tức và khuyến mãi mới nhất từ Stationery</p>
            <form className="subscribe-form">
              <input type="email" placeholder="Nhập địa chỉ email của bạn" required />
              <button type="submit" className="btn-subscribe">
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
