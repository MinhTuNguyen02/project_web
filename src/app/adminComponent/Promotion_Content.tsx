import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import { fetchPromotionsAPI, createPromotionAPI, updatePromotionAPI, deletePromotionAPI } from '../api'
import { Promotion_List } from './Promotion_List'

export const Promotion_Content = ({ isDisable }) => {
  const [promotions, setPromotions] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('')
  const [vsb, setVsb] = useState('hidden')
  const [animate, setAnimate] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)
  const [newPromotion, setNewPromotion] = useState({
    code: '',
    type: 'fixed',
    value: 0,
    minOrderValue: 0,
    startDate: '',
    endDate: '',
    maxUses: 0,
    maxUsesPerUser: 1,
    isActive: true
  })
  const [editMode, setEditMode] = useState(false)
  const [editingPromotion, setEditingPromotion] = useState(null)

  const closeForm = () => {
    setVsb('hidden')
    setAnimate(false)
    setNewPromotion({
      code: '',
      type: 'fixed',
      value: 0,
      minOrderValue: 0,
      startDate: '',
      endDate: '',
      maxUses: 0,
      maxUsesPerUser: 1,
      isActive: true
    })
    setEditMode(false)
    setEditingPromotion(null)
    setRefreshTrigger((prev) => prev + 1)
    setError(null)
  }

  const openForm = () => {
    setVsb('visible')
    setAnimate(true)
    setNewPromotion({
      code: '',
      type: 'fixed',
      value: 0,
      minOrderValue: 0,
      startDate: '',
      endDate: '',
      maxUses: 0,
      maxUsesPerUser: 1,
      isActive: true
    })
    setEditMode(false)
    setError(null)
  }

  useEffect(() => {
    if (vsb === 'visible' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [vsb])

  useEffect(() => {
    const isActive = selectedStatus === 'true' ? true : selectedStatus === 'false' ? false : undefined
    fetchPromotionsAPI(isActive)
      .then((data) => setPromotions(data.promotions || []))
      .catch((err) => setError([err.message || 'Không thể tải danh sách khuyến mãi']))
  }, [selectedStatus, refreshTrigger])

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value)
  }

  const openEditForm = (promotion) => {
    setVsb('visible')
    setAnimate(true)
    setNewPromotion({
      code: promotion.code,
      type: promotion.type,
      value: promotion.value,
      minOrderValue: promotion.minOrderValue,
      startDate: promotion.startDate.split('T')[0],
      endDate: promotion.endDate.split('T')[0],
      maxUses: promotion.maxUses,
      maxUsesPerUser: promotion.maxUsesPerUser,
      isActive: promotion.isActive
    })
    setEditMode(true)
    setEditingPromotion(promotion)
    setError(null)
  }

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target
    setNewPromotion((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : id === 'value' || id === 'minOrderValue' || id === 'maxUses' || id === 'maxUsesPerUser' ? parseInt(value, 10) || 0 : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const promotionData = {
      ...newPromotion,
      value: parseInt(newPromotion.value, 10) || 0,
      minOrderValue: parseInt(newPromotion.minOrderValue, 10) || 0,
      maxUses: parseInt(newPromotion.maxUses, 10) || 0,
      maxUsesPerUser: parseInt(newPromotion.maxUsesPerUser, 10) || 1
    }

    try {
      if (editMode) {
        const updatedPromotion = await updatePromotionAPI(editingPromotion._id, promotionData)
        setPromotions((prev) =>
          prev.map((promo) => (promo._id === updatedPromotion._id ? updatedPromotion : promo))
        )
        toast.success('Sửa thành công')
      } else {
        const createdPromotion = await createPromotionAPI(promotionData)
        setPromotions((prev) => [...prev, createdPromotion])
        toast.success('Thêm thành công')
      }
      inputRef.current.focus()
      closeForm()
    } catch (err) {
      setError(err.response?.data?.message.split('-') || ['Không thể thêm khuyến mãi'])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (promotionId) => {
    if (window.confirm('Bạn có chắc muốn xóa khuyến mãi này?')) {
      setLoading(true)
      try {
        await deletePromotionAPI(promotionId)
        setPromotions((prev) => prev.filter((promo) => promo._id !== promotionId))
        toast.success('Xóa thành công')
      } catch (err) {
        setError(err.response?.data?.message?.split('-') || ['Không thể xóa khuyến mãi'])
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
            <strong>{editMode ? 'Sửa khuyến mãi' : 'Thêm khuyến mãi mới'}</strong>
            <i className="fa-solid fa-rectangle-xmark" onClick={closeForm}></i>
          </div>
          <div className="input-prod">
            <form onSubmit={handleSubmit}>
              <div className="block-inp">
                <label htmlFor="code">Mã khuyến mãi</label>
                <input
                  type="text"
                  id="code"
                  value={newPromotion.code}
                  onChange={handleInputChange}
                  ref={inputRef}
                  minLength={3}
                  maxLength={20}
                  required                  
                />
              </div>

              <div className="block-inp">
                <label htmlFor="type">Loại khuyến mãi</label>
                <select
                  id="type"
                  value={newPromotion.type}
                  onChange={handleInputChange}
                  required                  
                >
                  <option value="fixed">Giảm giá cố định</option>
                  <option value="percentage">Giảm giá phần trăm</option>
                  <option value="free_shipping">Miễn phí vận chuyển</option>
                </select>
              </div>

              <div className="block-inp">
                <label htmlFor="value">Giá trị</label>
                <input
                  type="number"
                  id="value"
                  value={newPromotion.value}
                  onChange={handleInputChange}
                  min={0}
                  required                  
                />
              </div>

              <div className="block-inp">
                <label htmlFor="minOrderValue">Giá trị đơn hàng tối thiểu</label>
                <input
                  type="number"
                  id="minOrderValue"
                  value={newPromotion.minOrderValue}
                  onChange={handleInputChange}
                  min={0}                  
                />
              </div>

              <div className="block-inp">
                <label htmlFor="startDate">Ngày bắt đầu</label>
                <input
                  type="date"
                  id="startDate"
                  value={newPromotion.startDate}
                  onChange={handleInputChange}
                  required                  
                />
              </div>

              <div className="block-inp">
                <label htmlFor="endDate">Ngày kết thúc</label>
                <input
                  type="date"
                  id="endDate"
                  value={newPromotion.endDate}
                  onChange={handleInputChange}
                  required                  
                />
              </div>

              <div className="block-inp">
                <label htmlFor="maxUses">Số lần sử dụng tối đa</label>
                <input
                  type="number"
                  id="maxUses"
                  value={newPromotion.maxUses}
                  onChange={handleInputChange}
                  min={0}                  
                />
              </div>

              <div className="block-inp">
                <label htmlFor="maxUsesPerUser">Số lần sử dụng tối đa mỗi người dùng</label>
                <input
                  type="number"
                  id="maxUsesPerUser"
                  value={newPromotion.maxUsesPerUser}
                  onChange={handleInputChange}
                  min={0}                  
                />
              </div>

              <div className="block-inp" style={{position:'relative',left:'-23%'}}>
                <label htmlFor="isActive" style={{display:'inline'}} >Hoạt động</label>
                <input
                  type="checkbox"
                  id="isActive"
                  checked={newPromotion.isActive}
                  onChange={handleInputChange}      
                  style={{width:'auto'}}            
                />
              </div>
            </form>
            {error && error.map((err, index) => (
              <p key={`error-${index}`} className="error">{err}</p>
            ))}
          </div>
          <div className="input-footer">
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? (editMode ? 'Đang sửa' : 'Đang thêm') : (editMode ? 'Sửa' : 'Thêm')}
            </button>
          </div>
        </div>
      </div>
      <select name="status" className="cate-comboBox" value={selectedStatus} onChange={handleStatusChange}>
        <option value="">Tất cả trạng thái</option>
        <option value="true">Đang hoạt động</option>
        <option value="false">Không hoạt động</option>
      </select>
      <div className="add-btn">
        <button disabled={!isDisable} onClick={openForm}>
          Thêm khuyến mãi mới
        </button>
      </div>
      <div>
        <div className="promo-content">
          <div className="promoCode">
            <strong>Mã</strong>
          </div>
          <div className="promoType">
            <strong>Loại</strong>
          </div>
          <div className="promoValue">
            <strong>Giá trị</strong>
          </div>
          <div className="promoMinOrder">
            <strong>Đơn tối thiểu</strong>
          </div>
          <div className="promoStartDate">
            <strong>Bắt đầu</strong>
          </div>
          <div className="promoEndDate">
            <strong>Kết thúc</strong>
          </div>
          <div className="promoUsedCount">
            <strong>Đã dùng</strong>
          </div>
          <div className="promoStatus">
            <strong>Trạng thái</strong>
          </div>
          <div className="promoOpt">
            <strong>Thao tác</strong>
          </div>
        </div>
        {promotions?.map((promotion) => (
          <Promotion_List
            key={promotion._id}
            promotion={promotion}
            isDisable={isDisable}
            onEdit={openEditForm}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}