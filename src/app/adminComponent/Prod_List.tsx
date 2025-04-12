// import Image from "next/image"
export const  Prod_List = ({product, isDisable, onEdit, onAdd, onDelete }) => {
  const handleEdit = () => {
    if (isDisable) {
      onEdit(product) // Gọi hàm chỉnh sửa với danh mục hiện tại
    }
  }
  const handleAdd = () => {
    onAdd(true)
    handleEdit()
  }
  const handleDelete = () => {
    if (isDisable) {
      onDelete(product._id) // Gọi hàm xóa với product._id
    }
  }
  return(
    <div className="prod-content">
      <div className="prodImg">
        <img src={product.img[0]} alt={product.productName} width={60} height={60}/>
        {/* <Image 
        src={product.img} 
        alt="Product Image"
        width={60} 
        height={60}
        unoptimized
        /> */}
      </div>
      <div className="prodId">
        <span>{product._id}</span>
      </div>
      <div className="prodName">
        <span>{product.productName}</span>
      </div>
      <div className="prodInv">
        <span>{product.inventory==0?"Hết":product.inventory}</span>
      </div>
      <div className="prodPrice">
        <span>{product.price}đ</span>
      </div>
      <div className="prodOpt">
        <button disabled={!isDisable} onClick={handleAdd}>Thêm</button>
        <button disabled={!isDisable} onClick={handleEdit}>Sửa</button>
        <button disabled={!isDisable} onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  )
}