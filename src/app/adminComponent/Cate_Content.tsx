import React, { useState, useEffect, useRef } from 'react'
import { fetchCategoryAPI, createNewCategoryAPI, updateCategoryAPI } from '../api/index'
import { Cate_List } from "./Cate_List"
import clsx from "clsx"

export const CategoryList = ( {isDisable} ) => {
  const [categories, setCategories] = useState([])
  const [vsb,setVsb] = useState('hidden')
  const [animate, setAnimate] = useState(false);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)
  const [newCategory, setNewCategory] = useState({
    categoryName: '',
    description: ''
  })

  const [editMode, setEditMode] = useState(false); // Thêm state để phân biệt thêm mới/chỉnh sửa
  const [editingCategory, setEditingCategory] = useState(null); // Lưu danh mục đang chỉnh sửa

  const closeForm = () => { 
    setVsb('hidden')
    setAnimate(false)
    setNewCategory({ categoryName: '', description: '' })
    setEditMode(false); // Reset chế độ chỉnh sửa
    setEditingCategory(null); // Reset danh mục đang chỉnh sửa
    setError(null)
  }
  
  const openForm = () => { 
    setVsb('visible')
    setAnimate(true)
    setNewCategory({ categoryName: '', description: '' })
    setEditMode(false); // Chế độ thêm mới    
    setError(null)
  }

  useEffect(() => {
    if (vsb === 'visible' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [vsb])

  useEffect(() => {
    fetchCategoryAPI().then(category => setCategories(category))    
  }, [])

  const openEditForm = (category) => {
    setVsb('visible');
    setAnimate(true);
    setNewCategory({
      categoryName: category.categoryName,
      description: category.description
    });
    setEditMode(true); // Chế độ chỉnh sửa
    setEditingCategory(category); // Lưu danh mục đang chỉnh sửa
    setError(null);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewCategory((prev) => ({
      ...prev,
      [id]: value // Cập nhật thuộc tính tương ứng (categoryName hoặc description)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    
    try{
      if (editMode) {
        // Chế độ chỉnh sửa
        const updatedCategory = await updateCategoryAPI(editingCategory._id, newCategory);
        setCategories((prev) =>
          prev.map((cat) => (cat._id === updatedCategory._id ? updatedCategory : cat))
        )
      } else {
        const createdCategory = await createNewCategoryAPI(newCategory)
        setCategories(prev => [...prev, createdCategory])
        inputRef.current.focus()
      }
      closeForm() 

    } catch (err) {
      console.log(err.response?.data?.message)
      setError(err.response?.data?.message.split("-") || 'Không thể thêm danh mục');
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className={clsx('frameInput',vsb)} onClick={closeForm}>
        <div className={clsx('input-container', {animate})} onClick={(e) => e.stopPropagation()}>
          <div className="input-header">
            <strong>Thêm danh mục</strong>
            <i className="fa-solid fa-rectangle-xmark" onClick={closeForm}></i>
          </div>
          <div className="input-content">
            <form onSubmit={handleSubmit}>
              <div className="block-inp">
                <label htmlFor="categoryName">Tên danh mục</label>
                <input 
                  type="text" 
                  id="categoryName" 
                  value={newCategory.categoryName} 
                  onChange={handleInputChange} 
                  ref={inputRef}
                  required
                />
              </div>
              <div className="block-inp">
                <label htmlFor="description">Mô tả</label>
                <input 
                  type="text" 
                  id="description" 
                  value={newCategory.description} 
                  onChange={handleInputChange} 
                />
              </div>
              {error && error.map((err, index) => (<p key={index} className="error">{err}</p>))}
            </form>
          </div>
          <div className="input-footer">
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? 'Đang thêm...' : 'Thêm'}
            </button>
          </div> 
        </div>
      </div>  
      <div className="add-btn">
        <button disabled={!isDisable} onClick={openForm}>Thêm Danh mục</button>
      </div>
      {categories.map(category => (
        <Cate_List
        key={category._id} 
        category={category}
        isDisable={isDisable}
        onEdit={openEditForm} // Truyền hàm chỉnh sửa xuống Cate_List
        />
      ))}
    </div>
  )
}
