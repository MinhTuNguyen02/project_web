"use client"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastContainer, toast } from "react-toastify"
import { getAddressesAPI, addAddressAPI, updateAddressAPI, deleteAddressAPI } from "../../api"
import "../../resetCss.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import Link from "next/link"
import styles from "../../page.module.css"
import "../account.css"
import "./address.css"
import Header from "../../component/Header"
import Footer from "../../component/Footer"

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Address />
      <Footer />
      <ToastContainer theme="colored" autoClose={2000}/>
    </div>
  )
}

function Address() {
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()
  const [addresses, setAddresses] = useState([])
  const [loadingAddresses, setLoadingAddresses] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    recipientName: "",
    phoneNumber: "",
    address: "",
    isDefault: false,
  })

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      fetchAddresses()
    }
  }, [user])

  const fetchAddresses = async () => {
    try {
      setLoadingAddresses(true)
      const response = await getAddressesAPI()
      setAddresses(response.addresses || [])
    } catch (error) {
      setError(error.message || "Failed to fetch addresses")
    } finally {
      setLoadingAddresses(false)
    }
  }

  const validateForm = () => {
    if (!formData.recipientName || formData.recipientName.length < 2) {
      return "Tên người nhận phải có ít nhất 2 ký tự"
    }
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      return "Số điện thoại phải có đúng 10 chữ số"
    }
    if (!formData.address || formData.address.length < 5) {
      return "Địa chỉ phải có ít nhất 5 ký tự"
    }
    return null
  }

  const handleAddAddress = async (e) => {
    e.preventDefault()
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }
    if (!user?._id) {
      setError("Không tìm thấy thông tin người dùng, vui lòng đăng nhập lại")
      router.push("/login")
      return
    }
    try {
      await addAddressAPI({ ...formData })
      setFormData({ recipientName: "", phoneNumber: "", address: "", isDefault: false })
      setShowForm(false)
      setError(null)
      fetchAddresses()
      toast.success("Thêm địa chỉ thành công")
    } catch (error) {
      setError(error.message || "Failed to add address")
    }
  }

  const handleEditAddress = async (e) => {
    e.preventDefault()
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }
    try {
      await updateAddressAPI(editingId, formData)
      setFormData({ recipientName: "", phoneNumber: "", address: "", isDefault: false })
      setShowForm(false)
      setIsEditing(false)
      setEditingId(null)
      setError(null)
      fetchAddresses()
      toast.success("Cập nhật địa chỉ thành công")
    } catch (error) {
      setError(error.message || "Failed to update address")
    }
  }

  const handleDeleteAddress = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa địa chỉ này?")) {
      try {
        await deleteAddressAPI(id)
        fetchAddresses()
        toast.success("Xóa địa chỉ thành công")
      } catch (error) {
        setError(error.message || "Failed to delete address")
      }
    }
  }

  const handleEditClick = (addr) => {
    setFormData({
      recipientName: addr.recipientName,
      phoneNumber: addr.phoneNumber,
      address: addr.address,
      isDefault: addr.isDefault,
    })
    setEditingId(addr._id)
    setIsEditing(true)
    setShowForm(true)
    setError(null)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleCancel = () => {
    setFormData({ recipientName: "", phoneNumber: "", address: "", isDefault: false })
    setShowForm(false)
    setIsEditing(false)
    setEditingId(null)
    setError(null)
  }

  if (loading) {
    return <h2 style={{ justifySelf: "center" }}>Đang tải...</h2>
  }

  if (!user) {
    return null
  }

  const tmp = user.fullName.split(" ")
  const name = tmp[tmp.length - 1] + " " + tmp[0]

  return (
    <div>
      <div className="acc-banner">
        <div className="breadcrumb">
          <span>
            <Link href="/">Trang chủ</Link>
          </span>
          <span className="separator">/</span>
          <span>
            <Link href="/account">Trang khách hàng</Link>
          </span>
          <span className="separator">/</span>
          <span>Sổ địa chỉ</span>
        </div>
        <h1 className="banner-title">Sổ địa chỉ</h1>
      </div>

      <div className="page-cus-acc">
        <div className="acc-container">
          <div className="acc-content">
            <div className="acc-content-left">
              <div className="block-acc">
                <h5>TRANG TÀI KHOẢN</h5>
                <p>Xin chào, {name}!</p>
                <ul>
                  <li><Link href="/account">Thông tin tài khoản</Link></li>
                  <li><Link href="/account/orders">Đơn hàng của bạn</Link></li>
                  <li><Link href="/account/changePassword">Đổi mật khẩu</Link></li>
                  <li><Link href="/account/addresses">Sổ địa chỉ ({addresses.length})</Link></li>
                </ul>
              </div>
            </div>
            <div className="acc-content-right">
              <h1>Địa chỉ của bạn</h1>
              <div className="address-section">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button
                  className="add-address-btn"
                  onClick={() => {
                    setShowForm(true)
                    setIsEditing(false)
                    setFormData({ recipientName: "", phoneNumber: "", address: "", isDefault: false })
                    setError(null)
                  }}
                >
                  Thêm địa chỉ
                </button>
                {showForm && (
                  <form className="address-form" onSubmit={isEditing ? handleEditAddress : handleAddAddress}>
                    <div className="form-group">
                      <label>Tên người nhận:</label>
                      <input
                        type="text"
                        name="recipientName"
                        value={formData.recipientName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Số điện thoại:</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Địa chỉ:</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <input
                          type="checkbox"
                          name="isDefault"
                          checked={formData.isDefault}
                          onChange={handleInputChange}
                        />
                        Đặt làm địa chỉ mặc định
                      </label>
                    </div>
                    <div className="form-actions">
                      <button type="submit">{isEditing ? "Cập nhật" : "Thêm"}</button>
                      <button type="button" onClick={handleCancel}>
                        Hủy
                      </button>
                    </div>
                  </form>
                )}
                {loadingAddresses ? (
                  <p>Đang tải địa chỉ...</p>
                ) : addresses.length > 0 ? (
                    <ul className="address-list">
                    {addresses.map((addr) => (
                        <li key={addr._id} className="address-item">
                        <div>
                            <p>
                                <strong>{addr.recipientName}</strong>
                                {addr.isDefault && " (Mặc định)"}
                            </p>
                            <p>{addr.phoneNumber}</p>
                            <p>{addr.address}</p>
                        </div>
                        <div className="address-actions">
                            <button onClick={() => handleEditClick(addr)}>Chỉnh sửa</button>
                            <button onClick={() => handleDeleteAddress(addr._id)}>Xóa</button>
                        </div>
                        </li>
                    ))}
                    </ul>
                ) : (
                  <p>Chưa có địa chỉ</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}