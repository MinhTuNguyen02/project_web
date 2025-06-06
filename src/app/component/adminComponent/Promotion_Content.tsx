import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { toast } from 'react-toastify'
import { fetchPromotionsAPI, createPromotionAPI, updatePromotionAPI, deletePromotionAPI } from '@/app/api'
import { Promotion_List } from './Promotion_List'
import { Promotion } from '@/app/types'

export const Promotion_Content = ({ isDisable }: {isDisable: boolean}) => {
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [selectedStatus, setSelectedStatus] = useState('')
  const [vsb, setVsb] = useState('hidden')
  const [animate, setAnimate] = useState(false)
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const [error, setError] = useState<string[] | null>(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [newPromotion, setNewPromotion] = useState({
    code: '',
    type: 'fixed',
    value: 0,
    minOrderValue: 0,
    startDate: 0,
    endDate: 0,
    maxUses: 0,
    maxUsesPerUser: 1,
    isActive: true
  })
  // State phụ để lưu giá trị ngày cho input
  const [dateInputs, setDateInputs] = useState({
    startDate: '',
    endDate: ''
  })
  const [editMode, setEditMode] = useState(false)
  const [editingPromotion, setEditingPromotion] = useState<Promotion | null>(null)

  const formatDateForInput = (timestamp: number): string => {
    if (!timestamp) return ''
    return new Date(timestamp).toISOString().split('T')[0]
  }

  const parseDateToTimestamp = (dateStr: string): number => {
    if (!dateStr) return 0
    return new Date(dateStr).getTime()
  }

  const closeForm = () => {
    setVsb('hidden')
    setAnimate(false)
    setNewPromotion({
      code: '',
      type: 'fixed',
      value: 0,
      minOrderValue: 0,
      startDate: 0,
      endDate: 0,
      maxUses: 0,
      maxUsesPerUser: 1,
      isActive: true
    })
    setDateInputs({
      startDate: '',
      endDate: ''
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
      startDate: 0,
      endDate: 0,
      maxUses: 0,
      maxUsesPerUser: 1,
      isActive: true
    })
    setDateInputs({
      startDate: '',
      endDate: ''
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

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value)
  }

  const openEditForm = (promotion: Promotion) => {
    setVsb('visible')
    setAnimate(true)
    setNewPromotion({
      code: promotion.code,
      type: promotion.type,
      value: promotion.value,
      minOrderValue: promotion.minOrderValue,
      startDate: promotion.startDate,
      endDate: promotion.endDate,
      maxUses: promotion.maxUses,
      maxUsesPerUser: promotion.maxUsesPerUser,
      isActive: promotion.isActive
    })
    setDateInputs({
      startDate: formatDateForInput(promotion.startDate),
      endDate: formatDateForInput(promotion.endDate)
    })
    setEditMode(true)
    setEditingPromotion(promotion)
    setError(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    const isCheckbox = 'type' in e.target && e.target.type === 'checkbox'
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : undefined
  
    if (id === 'startDate' || id === 'endDate') {
      setDateInputs((prev) => ({
        ...prev,
        [id]: value
      }))
      setNewPromotion((prev) => ({
        ...prev,
        [id]: parseDateToTimestamp(value)
      }))
    } else {
      setNewPromotion((prev) => ({
        ...prev,
        [id]: isCheckbox ? checked : 
          id === 'value' || id === 'minOrderValue' || id === 'maxUses' || id === 'maxUsesPerUser' ? Number(value) || 0 : 
          value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const promotionData = {
      ...newPromotion,
      value: newPromotion.value || 0,
      minOrderValue: newPromotion.minOrderValue || 0,
      maxUses: newPromotion.maxUses || 0,
      maxUsesPerUser: newPromotion.maxUsesPerUser || 1
    }

    try {
      if (editMode) {
        const updatedPromotion = await updatePromotionAPI(editingPromotion?._id, promotionData)
        setPromotions((prev) =>
          prev.map((promo) => (promo._id === updatedPromotion._id ? updatedPromotion : promo))
        )
        toast.success('Sửa thành công')
      } else {
        const createdPromotion = await createPromotionAPI(promotionData)
        setPromotions((prev) => [...prev, createdPromotion])
        toast.success('Thêm thành công')
      }
      if (inputRef.current) {
        inputRef.current.focus()
      }
      closeForm()
    } catch (err: unknown) {
      let errorMessage: string[] = ['Không thể thêm khuyến mãi']
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

  const handleDelete = async (promotionId: string) => {
    if (window.confirm('Bạn có chắc muốn xóa khuyến mãi này?')) {
      setLoading(true)
      try {
        await deletePromotionAPI(promotionId)
        setPromotions((prev) => prev.filter((promo) => promo._id !== promotionId))
        toast.success('Xóa thành công')
      } catch (err: unknown) {
        let errorMessage: string[] = ['Không thể xóa khuyến mãi']
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
                  value={dateInputs.startDate}
                  onChange={handleInputChange}
                  required                  
                />
              </div>

              <div className="block-inp">
                <label htmlFor="endDate">Ngày kết thúc</label>
                <input
                  type="date"
                  id="endDate"
                  value={dateInputs.endDate}
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
                <input
                  type="checkbox"
                  id="isActive"
                  checked={newPromotion.isActive}
                  onChange={handleInputChange}      
                  style={{width:'auto'}}            
                />
                <label htmlFor="isActive" style={{display:'inline',position:'absolute',top:'6px'}} >Hoạt động</label>
              </div>
              <div className="block-submit2">
                <button type='submit' disabled={loading}>
                  {loading ? (editMode ? 'Đang sửa' : 'Đang thêm') : (editMode ? 'Sửa' : 'Thêm')}
                </button>
              </div>
            </form>
            {error && error.map((err, index) => (
              <p key={`error-${index}`} className="error">{err}</p>
            ))}
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