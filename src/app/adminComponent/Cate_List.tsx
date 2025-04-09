export  const Cate_List = ( { category, isDisable } ) =>{
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
            <button disabled={!isDisable}>Sửa</button>
          </div>
        </div>
      </div>
    )
  }