import { fetchProductAPI, fetchCategoryAPI, createNewProductAPI } from '../api/index'
import React, { useState, useEffect, useRef } from 'react'
import {Prod_List} from "./Prod_List"
import clsx from "clsx"

export const Prod_Content = ( {isDisable} ) => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [vsb,setVsb] = useState('hidden')
  const [animate, setAnimate] = useState(false);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)
  const [newProduct, setNewProduct] = useState({
    productName: '',
    description: ''
  })

  const closeForm = () => { 
    setVsb('hidden')
    setAnimate(false)
    setError(null)
  }
  
  const openForm = () => { 
    setVsb('visible')
    setAnimate(true)
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

  useEffect(() => {
    fetchProductAPI(selectedCategory).then(product => setProducts(product))    
  }, [selectedCategory])

  const handleCategoryChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedCategory(event.target.value)
  }

  const handleInputChange = (e) => {
      const { id, value } = e.target;
      setNewProduct((prev) => ({
        ...prev,
        [id]: value // Cập nhật thuộc tính tương ứng 
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setError(null)
      setLoading(true)
      
      try{
        const createdProduct = await createNewProductAPI(newProduct)
        setProducts(prev => [...prev, createdProduct])
        inputRef.current?.focus()
        closeForm() 
      } catch (err) {
        console.log(err.response?.data?.message)
        setError(err.response?.data?.message.split("-") || 'Không thể thêm danh mục');
      } finally {
        setLoading(false)
      }
    }

  return(
      <div>
        <div className={clsx('frameInput',vsb)} onClick={closeForm}>
          <div className={clsx('input-container', {animate})} onClick={(e) => e.stopPropagation()}>
            <div className="input-header">
              <strong>Thêm danh mục</strong>
              <i className="fa-solid fa-rectangle-xmark" onClick={closeForm}></i>
            </div>
            <div className="input-content">
              <form onSubmit={handleSubmit}>
              <select 
                name="categories" 
                className="cate-comboBox" 
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Tất cả danh mục</option>
                {categories?.map(category => 
                <option key={category._id} value={category._id}>
                  Danh mục {category.categoryName}
                </option>)}
              </select>
                <div className="block-inp">
                  <label htmlFor="categoryName">Tên danh mục</label>
                  <input 
                    type="text" 
                    id="categoryName" 
                    value={newProduct.productName} 
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
                    value={newProduct.description} 
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
        <select 
          name="categories" 
          className="cate-comboBox" 
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Tất cả danh mục</option>
          {categories?.map(category => 
          <option key={category._id} value={category._id}>
            Danh mục {category.categoryName}
          </option>)}
        </select>
        <div className="add-btn">
          <button disabled={!isDisable} onClick={openForm}>Thêm sản phẩm</button>
        </div>
        <div>
          {products?.map(product => 
          <Prod_List 
          key={product._id} 
          product={product} 
          isDisable={isDisable} />)}
        </div>
      </div>
  )
}