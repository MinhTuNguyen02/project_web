import { fetchProductAPI, fetchCategoryAPI, createNewProductAPI, updateProductAPI, deleteProductAPI } from '../api/index'
import React, { useState, useEffect, useRef } from 'react'
import {Prod_List} from "./Prod_List"
import clsx from "clsx"
import { toast } from 'react-toastify';

export const Prod_Content = ( {isDisable} ) => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedCategoryInput, setSelectedCategoryInput] = useState('')
  const [vsb,setVsb] = useState('hidden')
  const [animate, setAnimate] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)
  const [newProduct, setNewProduct] = useState({
    categoryId: '',
    productName: '',
    description: '',
    price: 0,
    img: [],
    quantity: 0 
  })

  const [editMode, setEditMode] = useState(false) // Thêm state để phân biệt thêm mới/chỉnh sửa
  const [editingProduct, setEditingProduct] = useState(null) // Lưu danh mục đang chỉnh sửa
  const [addMode, setAddMode] = useState(false)

  const closeForm = () => { 
    setVsb('hidden')
    setAnimate(false)
    setNewProduct({
      categoryId: '',
      productName: '',
      description: '',
      price: 0,
      img: [],
      quantity: 0
    })
    setEditMode(false) // Reset chế độ chỉnh sửa
    setEditingProduct(null) // Reset danh mục đang chỉnh sửa
    setSelectedCategoryInput('')
    setAddMode(false)
    setRefreshTrigger((prev) => prev + 1)
    setError(null)
  }
  
  const openForm = () => { 
    setVsb('visible')
    setAnimate(true)
    setNewProduct({
      categoryId: '', 
      productName: '',
      description: '',
      price: 0,
      img: [],
      quantity: 0
    })
    setEditMode(false) // Chế độ thêm mới 
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
  }, [selectedCategory,refreshTrigger])

  const handleCategoryChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSelectedCategory(event.target.value)
  }

  const handleCategoryInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    const categoryId = event.target.value
    setSelectedCategoryInput(categoryId)
    setNewProduct((prev) => ({
      ...prev,
      categoryId: categoryId // Cập nhật categoryId vào newProduct
    }))
  }
  const openAddForm = (on) => {
    setAddMode(on)
  }
  const openEditForm = (product) => {
    setVsb('visible')
    setAnimate(true)
    setSelectedCategoryInput(product.categoryId)
    setNewProduct({
      categoryId: product.categoryId,
      productName: product.productName,
      description: product.description,
      price: product.price,
      img: product.img,
      quantity: 0
    })
    setEditMode(true) // Chế độ chỉnh sửa
    setEditingProduct(product) // Lưu danh mục đang chỉnh sửa
    setError(null)
  }

  const handleInputChange = (e) => {
      const { id, value } = e.target
      setNewProduct((prev) => ({
        ...prev,
        [id]: id === 'img' ? value.split(',') : value // Xử lý img như mảng
      }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    
    const productData = {
      ...newProduct,
      categoryId: selectedCategoryInput || newProduct.categoryId, // Sử dụng selectedCategory nếu có
      price: parseFloat(newProduct.price) || 0, // Chuyển price sang số
      quantity: parseInt(newProduct.quantity, 10) || 0 // Chuyển quantity sang số
    }

    try{
      if(editMode) {
        const updatedProduct = await updateProductAPI(editingProduct._id, productData)
        setProducts((prev) =>
          prev.map((prod) => (prod._id === updatedProduct._id ? updatedProduct : prod))
        )
        toast.success(addMode?"Thêm thành công":"Sửa thành công")
      }else {
        const createdProduct = await createNewProductAPI(productData)
        setProducts(prev => [...prev, createdProduct])
        toast.success("Thêm thành công")
      }
      inputRef.current.focus()
      closeForm() 
    } catch (err) {
      console.log(err.response?.data?.message)
      setError(err.response?.data?.message.split("-") || 'Không thể thêm sản phẩm')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (productId) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      setLoading(true)
      try {
        await deleteProductAPI(productId)
        setProducts((prev) => prev.filter((prod) => prod._id !== productId))
        toast.success("Xóa thành công")
      } catch (err) {
        setError(err.response?.data?.message?.split('-') || ['Không thể xóa sản phẩm'])
      } finally {
        setLoading(false)
      }
    }
  }

  return(
    <div>
      <div className={clsx('frameInput',vsb)} onClick={closeForm}>
        <div className={clsx('input-container', {animate})} onClick={(e) => e.stopPropagation()}>
          <div className="input-header">
            <strong>{editMode?(addMode?"Thêm sản phẩm":"Sửa sản phẩm"):"Thêm sản phẩm mới"}</strong>
            <i className="fa-solid fa-rectangle-xmark" onClick={closeForm}></i>
          </div>
          <div className="input-prod">
            <form onSubmit={handleSubmit}>
              <div className="block-inp">
                <select 
                  id="categoryId" 
                  className="cate-comboBox-inp" 
                  value={selectedCategoryInput}
                  onChange={handleCategoryInputChange}
                  disabled={editMode?(addMode?true:false):false}
                >
                  <option value="">Chọn danh mục</option>
                  {categories?.map(category => 
                  <option key={category._id} value={category._id}>
                    Danh mục {category.categoryName}
                  </option>)}
                </select>
              </div>

              <div className="block-inp">
                <label htmlFor="productName">Tên sản phẩm</label>
                <input 
                  type="text" 
                  id="productName" 
                  value={newProduct.productName} 
                  onChange={handleInputChange} 
                  ref={inputRef}
                  min={3}
                  max={100}
                  required
                  disabled={editMode?(addMode?true:false):false}
                />
              </div>

              <div className="block-inp">
                <label htmlFor="description">Mô tả</label>
                <textarea 
                  // type="text" 
                  id="description" 
                  value={newProduct.description} 
                  onChange={handleInputChange} 
                  disabled={editMode?(addMode?true:false):false}
                  rows={1}
                />
              </div>

              <div className="block-inp">
                <label htmlFor="price">Giá</label>
                <input 
                  type="number" 
                  id="price" 
                  value={newProduct.price} 
                  onChange={handleInputChange} 
                  min={0}
                  required
                  disabled={editMode?(addMode?true:false):false}
                />
              </div>

              <div className="block-inp">
                <label htmlFor="img">Link hình ảnh <i style={{fontSize:'12.5px'}}>(phân cách bằng dấu phẩy)</i></label>
                <input 
                  type="text" 
                  id="img" 
                  value={newProduct.img.join(',') || ''} 
                  onChange={handleInputChange} 
                  disabled={editMode?(addMode?true:false):false}
                />
              </div>

              <div className="block-inp">
                <label htmlFor="quantity">Số lượng</label>
                <input 
                  type="number" 
                  id="quantity" 
                  value={newProduct.quantity} 
                  onChange={handleInputChange} 
                  min={0}
                  required
                  disabled={editMode?(addMode?false:true):false}
                />
              </div>
            </form>
            {error && error.map((err, index) => (<p key={index} className="error">{err}</p>))}
          </div>
          <div className="input-footer">
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? (editMode?(addMode?"Đang thêm":"Đang sửa"):"Đang thêm") : (editMode?(addMode?"Thêm":"Sửa"):"Thêm")}
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
        <button disabled={!isDisable} onClick={openForm}>Thêm sản phẩm mới</button>
      </div>
      <div>
        <div className="prod-content">
          <div className="prodImg">
          </div>
          <div className="prodId">
            <strong>ID</strong>
          </div>
          <div className="prodName">
            <strong>Tên sản phẩm</strong>
          </div>
          <div className="prodInv">
            <strong>Số lượng tồn</strong>
          </div>
          <div className="prodPC">
            <strong>Lượt bán</strong>
          </div>
          <div className="prodPrice">
            <strong>Giá bán</strong>
          </div>
          <div className="prodOpt">
          </div>
        </div>
        {products?.map(product => 
        <Prod_List 
        key={product._id} 
        product={product} 
        isDisable={isDisable} 
        onEdit={openEditForm}
        onAdd={openAddForm}
        onDelete={handleDelete}
        />)}
      </div>
    </div>
  )
}