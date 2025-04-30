import React, { useState, useEffect, useRef } from 'react'
import { fetchNewsAPI, createNewNewsAPI, updateNewsAPI, deleteNewsAPI } from '../api/index'
import { News_List } from "./News_List"
import clsx from "clsx"
import { toast } from 'react-toastify';

export const News_Content = ({ isDisable }) => {
  const [news, setNews] = useState([])
  const [vsb, setVsb] = useState('hidden')
  const [animate, setAnimate] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)
  const [newNews, setNewNews] = useState({
    img: '',
    title: '',
    content: ''
  })

  const [editMode, setEditMode] = useState(false)
  const [editingNews, setEditingNews] = useState(null)

  const closeForm = () => {
    setVsb('hidden')
    setAnimate(false)
    setNewNews({ img: '', title: '', content: '' })
    setEditMode(false)
    setEditingNews(null)
    setError(null)
  }

  const openForm = () => {
    setVsb('visible')
    setAnimate(true)
    setNewNews({ img: '', title: '', content: '' })
    setEditMode(false)
    setError(null)
  }

  useEffect(() => {
    if (vsb === 'visible' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [vsb])

  useEffect(() => {
    fetchNewsAPI().then(newsList => setNews(newsList))
  }, [])

  const openEditForm = (newsItem) => {
    setVsb('visible')
    setAnimate(true)
    setNewNews({
      img: newsItem.img,
      title: newsItem.title,
      content: newsItem.content
    })
    setEditMode(true)
    setEditingNews(newsItem)
    setError(null)
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setNewNews((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (editMode) {
        // Chế độ chỉnh sửa
        const updatedNews = await updateNewsAPI(editingNews._id, newNews)
        setNews((prev) =>
          prev.map((item) => (item._id === updatedNews._id ? updatedNews : item))
        )
        toast.success("Sửa tin tức thành công")
      } else {
        // Chế độ thêm mới
        const createdNews = await createNewNewsAPI(newNews)
        setNews(prev => [...prev, createdNews])
        toast.success("Thêm tin tức thành công")
      }
      inputRef.current.focus()
      closeForm()
    } catch (err) {
      setError(err.response?.data?.message.split("-") || ['Không thể thêm tin tức'])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (newsId) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setLoading(true)
      try {
        await deleteNewsAPI(newsId)
        setNews((prev) => prev.filter((news) => news._id !== newsId))
        toast.success("Xóa thành công")
      } catch (err) {
        setError(err.response?.data?.message?.split('-') || ['Không thể xóa sản phẩm'])
      } finally {
        setLoading(false)
      }
    }
  }  

  return (
    <div>
      <div className={clsx('frameInput', vsb)} onClick={closeForm}>
        <div className={clsx('input-container', { animate })} onClick={(e) => e.stopPropagation()}>
          <div className="input-header">
            <strong>{editMode ? "Sửa tin tức" : "Thêm tin tức"}</strong>
            <i className="fa-solid fa-rectangle-xmark" onClick={closeForm}></i>
          </div>
          <div className="input-cate">
            <form onSubmit={handleSubmit}>
              <div className="block-inp">
                <label htmlFor="img">Hình ảnh</label>
                <input
                  type="text"
                  id="img"
                  value={newNews.img}
                  onChange={handleInputChange}
                />
              </div>
              <div className="block-inp">
                <label htmlFor="title">Tiêu đề</label>
                <input
                  type="text"
                  id="title"
                  value={newNews.title}
                  onChange={handleInputChange}
                  ref={inputRef}
                  minLength={2}
                  maxLength={100}
                  required
                />
              </div>
              <div className="block-inp">
                <label htmlFor="content">Nội dung</label>
                <textarea
                  id="content"
                  value={newNews.content}
                  onChange={handleInputChange}
                  rows="5"
                />
              </div>
              {error && error.map((err, index) => (
                <p key={index} className="error">{err}</p>
              ))}
            </form>
          </div>
          <div className="input-footer">
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? (editMode ? "Đang sửa" : "Đang thêm") : (editMode ? "Sửa" : "Thêm")}
            </button>
          </div>
        </div>
      </div>
      <div className="add-btn">
        <button disabled={!isDisable} onClick={openForm}>Thêm Tin tức</button>
      </div>
      {news.map(newsItem => (
        <News_List
          key={newsItem._id}          
          news={newsItem}
          isDisable={isDisable}
          onEdit={openEditForm}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}