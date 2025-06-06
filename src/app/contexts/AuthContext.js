/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { createContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { loginAPI, registerAPI, fetchUserInfoAPI } from "../api/index"
import { toast } from 'react-toastify'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetchUserInfo(token)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchUserInfo = async (token) => {
    try {
      const data = await fetchUserInfoAPI(token)

      const userData = data.user || data
      if (userData && userData._id) {
        setUser(userData)
      } else {
        throw new Error("No valid user data in response")
      }
    } catch (err) {
      if (err.statusCode === 401 || err.message.includes("Token expired")) {
        toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.")
        localStorage.removeItem("token")
        setUser(null)
        router.push("/pages/login")
      } else {
        toast.error(err.message || "Không thể tải thông tin người dùng")
        setUser(null)
      }
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const { user, token } = await loginAPI({ email, password })
      localStorage.setItem("token", token)
      setUser(user)
      if (user.role === "admin") {
        toast.success("Đăng nhập thành công!")
        router.push("/pages/admin")
      } else {
        toast.success("Đăng nhập thành công!")
        router.push("/")
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || "Đăng nhập thất bại")
    }
  }

  const register = async (email, password, fullName, phoneNumber) => {
    try {
      await registerAPI({ email, password, fullName, phoneNumber })
      toast.success("Đăng ký thành công! Vui lòng đăng nhập.")
      router.push("/pages/login")
    } catch (error) {
      throw new Error(error.response?.data?.message || "Đăng ký thất bại")
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
    toast.info("Đã đăng xuất")
    router.push("/pages/login")
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}