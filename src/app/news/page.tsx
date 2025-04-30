"use client"
import "./news_css.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { fetchNewsAPI } from '../api/index'

import BackHeader from "../component/BackHeader"
import Header from "../component/Header"
import Footer from "../component/Footer"

export default function Home() {
  return (
    <div>
      <BackHeader/>
      <Header/>
      <NewsPage/>
      <Footer/>
    </div>
  )
}

function NewsPage() {
  const [news, setNews] = useState([])
  
  useEffect(() => {
    fetchNewsAPI().then(newsList => {
      console.log("Fetched news:", newsList)
      setNews(newsList.filter(item => item._id && item._id !== "undefined"))
    }).catch(err => console.error("Fetch news error:", err))
  }, [])  

  const formatDate = (date) => {
    const d = new Date(date)
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`
  }

  return (
    <div className="page_news">
      <div className="news-banner">
        <div className="breadcrumb">
          <span><Link href="/">Trang chủ</Link></span>
          <span className="separator">/</span>
          <span>Tất cả tin tức</span>
        </div>
        <h1 className="banner-title">TẤT CẢ TIN TỨC</h1>
      </div>
      <div className="news-container">
        <div className="news-box-shadow">
          <div className="news-content">
            <div className="news-list">
              {news.length === 0 ? (
                <p>Không có tin tức nào</p>
              ) : (
                news.map(news => (
                  <div key={news._id} className="news-item">
                    <div className="news-image">
                      <img src={news.img || "/img/placeholder.jpg"} alt={news.title} />
                    </div>
                    <div className="news-info">
                      <h3 className="news-title">{news.title}</h3>
                      <div className="news-date">
                        <i className="far fa-calendar-alt"></i> {formatDate(news.createdAt)}
                      </div>
                      <p className="news-summary">{news.content}</p>
                      <Link href={`/news/${news._id}`} className="read-more">
                        Đọc tiếp <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}