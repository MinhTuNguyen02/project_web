"use client"
import React, { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { getAllUsersAPI } from "@/app/api"
import { User } from "@/app/types"
import { User_List } from "./User_List"

export const User_Content = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [searchId, setSearchId] = useState('')
  
  // Lấy danh sách khách hàng
  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await getAllUsersAPI()
      setUsers(response.users || [])
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message || 'Không thể tải danh sách khách hàng')
      } else {
        toast.error('Không thể tải danh sách khách hàng')
      }
    } finally {
      setLoading(false)      
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchId(e.target.value)
  }

  const searchUsers = searchId
    ? users.filter((user: User) => user._id === searchId)
    : users

  return (
    <div>
      <div className="find-user">
        <label>Tìm khách hàng:</label>
        <input type="text" placeholder="Nhập ID khách hàng" onChange={handleSearchChange}/>
      </div>
      {loading ? (
        <div>Đang tải...</div>
      ) : !searchUsers ? (
        <div>Không có khách hàng nào.</div>
      ) : (
        <div>
          <div className="userItem">
            <div className="userId">
              <strong>ID</strong>
            </div>
            <div className="userEmail">
              <strong>Email</strong>
            </div>
            <div className="userName">
              <strong>Họ tên</strong>
            </div>
            <div className="userDate">
              <strong>Thời điểm đăng ký</strong>
            </div>
          </div>
          {searchUsers.map((user) => (
            <User_List key={user._id} user={user}/>
          ))}
        </div>
      )}
    </div>
  )
}