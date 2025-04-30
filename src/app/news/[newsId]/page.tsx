"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { fetchNewsByIdAPI } from "../../api/index"
import "../news_css.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import Link from "next/link"
import styles from "../../page.module.css"
import BackHeader from "@/app/component/BackHeader"
import Header from "@/app/component/Header"
import Footer from "@/app/component/Footer"

export default function NewsDetailPage() {
  return (
    <div className={styles.main}>
      <BackHeader/>
      <Header />
      <NewsDetail />
      <Footer />
    </div>
  )
}

function NewsDetail() {
  const params = useParams()
  const newsId = params.newsId // Hoặc params.id nếu thư mục là [id]
  const [news, setNews] = useState(null)
  const [loadingNews, setLoadingNews] = useState(true)
  const [error, setError] = useState(null)

  console.log("params:", params, "newsId:", newsId)

  useEffect(() => {
    if (newsId) {
      fetchNews()
    } else {
      setError("Không tìm thấy ID tin tức")
      setLoadingNews(false)
    }
  }, [newsId])

  const fetchNews = async () => {
    try {
      setLoadingNews(true)
      const response = await fetchNewsByIdAPI(newsId)
      setNews(response) // Giả sử API trả về object { _id, title, content, ... }
      setError(null)
    } catch (error) {
      setError(error.message || "Không thể tải chi tiết tin tức")
    } finally {
      setLoadingNews(false)
    }
  }

  if (loadingNews) {
    return <div className="loading">Đang tải...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  if (!news) {
    return <div className="error">Không tìm thấy tin tức</div>
  }

  return (
    <div>
      <div className="news-banner">
        <div className="breadcrumb">
          <span><Link href="/">Trang chủ</Link></span>
          <span className="separator">/</span>
          <span><Link href="/news">Tất cả tin tức</Link></span>
          <span className="separator">/</span>
          <span>{news.title}</span>
        </div>
        <h1 className="banner-title">{news.title}</h1>
      </div>
      <div className="news-detail-container">
        <div className="news-detail-content">
          <p className="news-content">{news.content}</p>
        </div>
      </div>
    </div>
  )
}