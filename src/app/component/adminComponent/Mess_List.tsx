'use client'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { fetchMessagesAPI } from '@/app/api/index'
import { Message } from '@/app/types'
import '@/app/pages/admin/admin.css'


export const Mess_List = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMessages = async () => {
      setLoading(true)
      try {
        const fetchedMessages = await fetchMessagesAPI()
        // Sắp xếp tin nhắn theo createdAt mới nhất lên đầu
        const sortedMessages = fetchedMessages.sort((a: Message, b: Message) => b.createdAt - a.createdAt)
        setMessages(sortedMessages)
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message || 'Không thể tải danh sách tin nhắn')
        } else {
          toast.error('Không thể tải danh sách tin nhắn')
        }
      } finally {
        setLoading(false)
      }
    }

    loadMessages()
  }, [])

  return (
    <div className={"messList"}>
      <h3>Danh sách tin nhắn</h3>
      {loading ? (
        <p className={"loading"}>Đang tải...</p>
      ) : messages.length === 0 ? (
        <p className={"empty"}>Không có tin nhắn nào</p>
      ) : (
        <ul className={"messageList"}>
          {messages.map((message) => (
            <li key={message._id} className={"messageItem"}>
              <div className={"messageHeader"}>
                <span className={"messageType"}>
                  {message.type === 'contact' ? 'Liên hệ' : 'Đăng ký'}
                </span>
                <span className={"messageDate"}>
                  {new Date(message.createdAt).toLocaleString('vi-VN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                  })}
                </span>
              </div>
              <div className={"messageBody"}>
                {message.type === 'contact' && message.fullName && (
                  <p>
                    <strong>Họ và tên:</strong> {message.fullName}
                  </p>
                )}
                <p>
                  <strong>Email:</strong> {message.email}
                </p>
                {message.type === 'contact' && message.phone && (
                  <p>
                    <strong>Số điện thoại:</strong> {message.phone}
                  </p>
                )}
                <p>
                  <strong>Nội dung:</strong> {message.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

