/* eslint-disable @next/next/no-img-element */

import { Product } from "@/app/types"

// import Image from "next/image"
export const  Prod_List = ({product, isDisable, onEdit, onAdd, onDelete }: 
  {product: Product, isDisable: boolean, onEdit: (product: Product)=>void, onAdd: (on:boolean)=>void, onDelete: (productId: string)=>void}) => {
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
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "₫"
  }
  return(
    <div className="prod-content">
      <div className="prodImg">
        <img src={product.img[0]} alt={product.productName} width={60} height={60}/>
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
      <div className="prodPC">
        <span>{product.purchaseCount}</span>
      </div>
      <div className="prodPrice">
        <span>{formatPrice(product.price)}</span>
      </div>
      <div className="prodOpt">
        <button disabled={!isDisable} onClick={handleAdd}>Thêm</button>
        <button disabled={!isDisable} onClick={handleEdit}>Sửa</button>
        <button disabled={!isDisable} onClick={handleDelete}>Xóa</button>
      </div>
    </div>
  )
}