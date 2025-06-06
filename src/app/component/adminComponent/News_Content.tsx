import React, { useState, useEffect, useRef } from 'react'
import { fetchNewsAPI, createNewNewsAPI, updateNewsAPI, deleteNewsAPI } from '@/app/api/index'
import { News_List } from "./News_List"
import clsx from "clsx"
import { toast } from 'react-toastify'
import { News } from '@/app/types'

export const News_Content = ({ isDisable }: {isDisable: boolean}) => {
  const [news, setNews] = useState<News[]>([])
  const [vsb, setVsb] = useState('hidden')
  const [animate, setAnimate] = useState(false)
  const [error, setError] = useState<string[] | null>(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [newNews, setNewNews] = useState({
    img: '',
    title: '',
    content: ''
  })

  const [editMode, setEditMode] = useState(false)
  const [editingNews, setEditingNews] = useState<News | null>(null)

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

  const openEditForm = (newsItem: News) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setNewNews((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (editMode) {
        // Chế độ chỉnh sửa
        const updatedNews = await updateNewsAPI(editingNews?._id, newNews)
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
      if (inputRef.current) {
        inputRef.current.focus()
      }
      closeForm()
    } catch (err: unknown) {
      let errorMessage: string[] = ['Không thể thêm tin tức']
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosErr = err as { response?: { data?: { message?: string } } }
        if (axiosErr.response?.data?.message) {
          errorMessage = axiosErr.response.data.message.split("-")
        }
      }
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (newsId: string) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setLoading(true)
      try {
        await deleteNewsAPI(newsId)
        setNews((prev) => prev.filter((news) => news._id !== newsId))
        toast.success("Xóa thành công")
      } catch (err: unknown) {
        let errorMessage: string[] = ['Không thể xóa bài viết']
        if (err && typeof err === 'object' && 'response' in err) {
          const axiosErr = err as { response?: { data?: { message?: string } } }
          if (axiosErr.response?.data?.message) {
            errorMessage = axiosErr.response.data.message.split("-")
          }
        }
        setError(errorMessage)
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
                  rows={5}
                />
              </div>
              {error && error.map((err, index) => (
                <p key={index} className="error">{err}</p>
              ))}
              <div className="block-submit1">
                <button type='submit' disabled={loading}>
                  {loading ? (editMode ? "Đang sửa" : "Đang thêm") : (editMode ? "Sửa" : "Thêm")}
                </button>
              </div>
            </form>
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