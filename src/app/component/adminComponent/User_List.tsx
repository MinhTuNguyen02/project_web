"use client"
import { User } from "@/app/types"

export const User_List = ({ user }: {user: User,}) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("vi-VN", {
      dateStyle: "medium",
      timeStyle: "short",
    })
  }

  return (
    <div>
      <div className="userItem">
        <div className="userId">
          <span>{user._id}</span>
        </div>
        <div className="userEmail">
          <span>{user.email}</span>
        </div>
        <div className="userName">
          <span>{user.fullName}</span>
        </div>
        <div className="userDate">
          <span>{formatDate(user.createdAt)}</span>
        </div>
      </div>
    </div>
  )
}