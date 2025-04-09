export const  Prod_List = ({product, isDisable}) => {
    return(
      <div className="prod-content">
          <div className="prodImg">
            <img src={product.img[0]} alt="id1" border="0" width={60} height={60}/>
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
            <span>{product.inventory}</span>
          </div>
          <div className="prodPrice">
            <span>{product.price}đ</span>
          </div>
          <div className="prodOpt">
            <button disabled={!isDisable}>Sửa</button>
            <button disabled={!isDisable}>Xóa</button>
          </div>
        </div>
    )
  }