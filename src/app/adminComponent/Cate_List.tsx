export const Cate_List = ( { category, isDisable, onEdit  } ) =>{

  const handleEdit = () => {
    if (isDisable) {
      onEdit(category) // Gọi hàm chỉnh sửa với danh mục hiện tại
    }
  }
  return(
    <div>
      <div className="cate-content">
        <div className="cateName">
          <span>{category.categoryName}</span>
        </div>
        <div className="cateDes">
          <span>{category.description}</span>
        </div>
        <div className="cateOpt">
          <button disabled={!isDisable} onClick={handleEdit}>Sửa</button>
        </div>
      </div>
    </div>
  )
}