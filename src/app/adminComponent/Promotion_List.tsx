export const Promotion_List = ({ promotion, isDisable, onEdit, onDelete }) => {
    const handleEdit = () => {
      if (isDisable) {
        onEdit(promotion)
      }
    }
  
    const handleDelete = () => {
      if (isDisable) {
        onDelete(promotion._id)
      }
    }
  
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('vi-VN')
    }
  
    const formatType = (type) => {
      switch (type) {
        case 'fixed':
          return 'Cố định'
        case 'percentage':
          return 'Phần trăm'
        case 'free_shipping':
          return 'Miễn phí vận chuyển'
        default:
          return type
      }
    }
    const formatPrice = (price) => {
      return price.toLocaleString("vi-VN") + "₫"
    }
    return (
      <div className="promo-content">
        <div className="promoCode">
          <span>{promotion.code}</span>
        </div>
        <div className="promoType">
          <span>{formatType(promotion.type)}</span>
        </div>
        <div className="promoValue">
          <span>{promotion.type === 'percentage' ? `${promotion.value}%` : `${formatPrice(promotion.value)}`}</span>
        </div>
        <div className="promoMinOrder">
          <span>{formatPrice(promotion.minOrderValue)}</span>
        </div>
        <div className="promoStartDate">
          <span>{formatDate(promotion.startDate)}</span>
        </div>
        <div className="promoEndDate">
          <span>{formatDate(promotion.endDate)}</span>
        </div>
        <div className="promoUsedCount">
          <span>{promotion.usedCount}/{promotion.maxUses || '∞'}</span>
        </div>
        <div className="promoStatus">
          <span>{promotion.isActive ? 'Hoạt động' : 'Không hoạt động'}</span>
        </div>
        <div className="promoOpt">
          <button disabled={!isDisable} onClick={handleEdit}>Sửa</button>
          <button disabled={!isDisable} onClick={handleDelete}>Xóa</button>
        </div>
      </div>
    )
  }