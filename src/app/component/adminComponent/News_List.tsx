/* eslint-disable @next/next/no-img-element */
import { News } from "@/app/types"

export const News_List = ({ news, isDisable, onEdit, onDelete }: {news: News, isDisable: boolean, onEdit: (newsItem: News)=>void, onDelete: (newsId: string)=>void}) => {
  const handleEdit = () => {
    if (isDisable) {
      onEdit(news)
    }
  }

  const handleDelete = () => {
    if (isDisable) {
      onDelete(news._id)
    }
  }

  return (
    <div>
      <div className="news-content-admin">
        <div className="newsImg">
          <img src={news.img} alt={news.title} width={60} height={60}/>
        </div>
        <div className="newsTitle">
          <span>{news.title}</span>
        </div>
        <div className="newsContent">
          <span>{news.content}</span>
        </div>
        <div className="newsOpt">
          <button disabled={!isDisable} onClick={handleEdit}>Sửa</button>
          <button disabled={!isDisable} onClick={handleDelete}>Xóa</button>
        </div>
      </div>
    </div>
  )
}