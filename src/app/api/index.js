import axios from 'axios'
import { API_ROOT } from '../../../untils/constant'

//User
export const getAllUsersAPI = async () => {
  const token = localStorage.getItem("token")
  const response = await axios.get(`${API_ROOT}/v1/users`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return response.data
}

export const registerAPI = async (userData) => {
  const response = await axios.post(`${API_ROOT}/v1/users/register`, userData)
  return response.data
}

export const loginAPI = async (userData) => {
  const response = await axios.post(`${API_ROOT}/v1/users/login`, userData)
  return response.data
}

export const fetchUserInfoAPI = async (token) => {
  try {
    const response = await axios.get(`${API_ROOT}/v1/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch user info' }
  }
}

export const changePasswordAPI = async ({ email, oldPassword, newPassword }) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.post(
      `${API_ROOT}/v1/users/change-password`,
      { email, oldPassword, newPassword },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to change password' }
  }
}

export const forgotPasswordAPI = async (email) => {
  try {
    const response = await axios.post(`${API_ROOT}/v1/users/forgot-password`, { email })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to send password reset request' }
  }
}

export const resetPasswordAPI = async (token, password) => {
  try {
    const response = await axios.post(`${API_ROOT}/v1/users/reset-password`, { token, password })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to reset password' }
  }
}

export const updateUserInfoAPI = async (userData) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) throw new Error('No authentication token found')

    const response = await axios.put(
      `${API_ROOT}/v1/users/me`,
      userData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update user info' }
  }
}

//address
export const addAddressAPI = async (addressData) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.post(
      `${API_ROOT}/v1/addresses`,
      addressData,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to add address' }
  }
}

export const getAddressesAPI = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.get(`${API_ROOT}/v1/addresses`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to fetch addresses' }
  }
}

export const updateAddressAPI = async (id, addressData) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.put(
      `${API_ROOT}/v1/addresses/${id}`,
      addressData,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to update address' }
  }
}

export const deleteAddressAPI = async (id) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.delete(`${API_ROOT}/v1/addresses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to delete address' }
  }
}

// Category API
export const fetchCategoryAPI = async () => {
  const response = await axios.get(`${API_ROOT}/v1/categories`)
  return response.data
}

export const createNewCategoryAPI = async (newCategoryData) => {
  const response = await axios.post(`${API_ROOT}/v1/categories`, newCategoryData)
  return response.data
}

export const updateCategoryAPI = async (categoryId, updatedCategoryData) => {
  const response = await axios.put(`${API_ROOT}/v1/categories/${categoryId}`, updatedCategoryData)
  return response.data
}

// Product API
export const fetchProductAPI = async (arg1, arg2) => {
  try {
    const urlParams = new URLSearchParams()

    // Hỗ trợ cú pháp cũ: fetchProductAPI(categoryId, searchQuery)
    if (typeof arg1 === 'string' || typeof arg2 === 'string') {
      if (arg1) urlParams.append('categoryId', arg1)
      if (arg2) urlParams.append('name', arg2)
    } 
    // Hỗ trợ cú pháp mới: fetchProductAPI({ categoryId, name, sort, limit, ... })
    else if (typeof arg1 === 'object' && arg1 !== null) {
      Object.entries(arg1).forEach(([key, value]) => {
        if (value) urlParams.append(key, value)
      })
    }

    const url = `${API_ROOT}/v1/products${urlParams.toString() ? '?' + urlParams.toString() : ''}`
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch products' }
  }
}

export const fetchProductByIdAPI = async (productId) => {
  const response = await axios.get(`${API_ROOT}/v1/products/${productId}`)
  return response.data
}

export const createNewProductAPI = async (newProductData) => {
  const response = await axios.post(`${API_ROOT}/v1/products`,newProductData)
  return response.data
}

export const updateProductAPI = async (productId, updatedProductData) => {
  const response = await axios.put(`${API_ROOT}/v1/products/${productId}`, updatedProductData)
  return response.data
}

export const deleteProductAPI = async (productId) => {
  const response = await axios.delete(`${API_ROOT}/v1/products/${productId}`)
  return response.data
}

//News
export const fetchNewsAPI = async () => {
  const response = await axios.get(`${API_ROOT}/v1/news`)
  return response.data
}

export const fetchNewsByIdAPI = async (newsId) => {
  const response = await axios.get(`${API_ROOT}/v1/news/${newsId}`)
  return response.data
}

export const createNewNewsAPI = async (newNewsData) => {
  const response = await axios.post(`${API_ROOT}/v1/news`, newNewsData)
  return response.data
}

export const updateNewsAPI = async (newsId, updatedNewsData) => {
  const response = await axios.put(`${API_ROOT}/v1/news/${newsId}`, updatedNewsData)
  return response.data
}

export const deleteNewsAPI = async (newsId) => {
  const response = await axios.delete(`${API_ROOT}/v1/news/${newsId}`)
  return response.data
}

// Cart API
export const addToCartAPI = async (productId, quantity = 1) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.post(
      `${API_ROOT}/v1/cart`,
      { productId, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to add to cart', statusCode: error.response?.status }
  }
}
  
export const getCartAPI = async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${API_ROOT}/v1/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch cart', statusCode: error.response?.status }
  }
}

export const updateCartQuantityAPI = async (productId, quantity) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.put(
      `${API_ROOT}/v1/cart/item/${productId}`,
      { quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update cart', statusCode: error.response?.status }
  }
}

export const deleteCartItemAPI = async (productId) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.delete(`${API_ROOT}/v1/cart/item/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete cart item', statusCode: error.response?.status }
  }
}

// Wishlist API
export const getWishlistAPI = async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${API_ROOT}/v1/wishlist`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch wishlist', statusCode: error.response?.status }
  }
}

export const addToWishlistAPI = async (productId) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.post(
      `${API_ROOT}/v1/wishlist/add/${productId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to add to wishlist', statusCode: error.response?.status }
  }
}

export const removeFromWishlistAPI = async (productId) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.delete(`${API_ROOT}/v1/wishlist/remove/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to remove from wishlist', statusCode: error.response?.status }
  }
}

// Order API
export const createOrderAPI = async (orderData) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.post(
      `${API_ROOT}/v1/orders`,
      orderData,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to create order', statusCode: error.response?.status }
  }
}

export const getOrdersAPI = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.get(`${API_ROOT}/v1/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to fetch orders', statusCode: error.response?.status }
  }
}

export const getUserOrdersAPI = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.get(`${API_ROOT}/v1/orders/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to fetch user orders', statusCode: error.response?.status }
  }
}

export const getOrderByIdAPI = async (orderId) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.get(`${API_ROOT}/v1/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to fetch order', statusCode: error.response?.status }
  }
}

export const cancelOrderAPI = async (orderId) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.put(
      `${API_ROOT}/v1/orders/${orderId}/cancel`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to cancel order', statusCode: error.response?.status }
  }
}

export const updateOrderStatusAPI = async (orderId, status) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.put(
      `${API_ROOT}/v1/orders/${orderId}/status`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    if (error.response?.status === 403) {
      throw new Error('Bạn không có quyền cập nhật trạng thái đơn hàng')
    }
    throw error.response?.data || { message: 'Failed to update order status', statusCode: error.response?.status }
  }
}

export const receiveOrderAPI = async (orderId) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.put(
      `${API_ROOT}/v1/orders/${orderId}/receive`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to confirm receipt', statusCode: error.response?.status }
  }
}

/**
 * Fetches daily statistics for a given date range.
 * @param {string} startDate - The start date in YYYY-MM-DD format.
 * @param {string} endDate - The end date in YYYY-MM-DD format.
 * @returns {Promise<{ stats: Array<{ date?: string, totalRevenue: number, orderCount: number, itemCount: number }> }>} The daily statistics.
 */
export const getDailyStatsAPI = async (startDate, endDate) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.get(`${API_ROOT}/v1/orders/stats/daily`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { startDate, endDate },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    if (error.response?.status === 403) {
      throw new Error('Bạn không có quyền truy cập thống kê')
    }
    throw error.response?.data || { message: 'Failed to fetch daily stats', statusCode: error.response?.status }
  }
}

/**
 * Fetches monthly statistics for a given year.
 * @param {string} year - The year to fetch statistics for.
 * @returns {Promise<{ stats: Array<{ month?: string, totalRevenue: number, orderCount: number, itemCount: number }> }>} The monthly statistics.
 */
export const getMonthlyStatsAPI = async (year) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.get(`${API_ROOT}/v1/orders/stats/monthly`, {
      headers: { Authorization: `Bearer ${token}` },
      params: { year },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    if (error.response?.status === 403) {
      throw new Error('Bạn không có quyền truy cập thống kê')
    }
    throw error.response?.data || { message: 'Failed to fetch monthly stats', statusCode: error.response?.status }
  }
}

/**
 * Fetches top products based on the provided parameters.
 * @param {Object} params - The parameters for fetching top products.
 * @param {string} [params.startDate] - The start date for daily stats (YYYY-MM-DD).
 * @param {string} [params.endDate] - The end date for daily stats (YYYY-MM-DD).
 * @param {string} [params.year] - The year for monthly or yearly stats.
 * @param {string} [params.month] - The month for monthly stats.
 * @returns {Promise<{ topProducts: Array<{ productId: string, productName: string, totalQuantity: number, totalRevenue: number, img: string[] }> }>} The top products.
 */
export const getTopProductsAPI = async (params) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.get(`${API_ROOT}/v1/orders/stats/top-products`, {
      headers: { Authorization: `Bearer ${token}` },
      params,
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    if (error.response?.status === 403) {
      throw new Error('Bạn không có quyền truy cập thống kê')
    }
    throw error.response?.data || { message: 'Failed to fetch top products', statusCode: error.response?.status }
  }
}

//Message
export const sendMessageAPI = async (messageData) => {
  try {
    const response = await axios.post(`${API_ROOT}/v1/messages`, messageData)
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to send message' }
  }
}

export const fetchMessagesAPI = async () => {
  try {
    const response = await axios.get(`${API_ROOT}/v1/messages`, {
      headers: { 'Cache-Control': 'no-cache' }
    })
    return response.data.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch messages' }
  }
}

// Promotion APIs
export const validatePromotionAPI = async (promotionData) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.post(
      `${API_ROOT}/v1/promotions/validate`,
      promotionData,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    throw error.response?.data || { message: 'Failed to validate promotion', statusCode: error.response?.status }
  }
}

export const fetchPromotionsAPI = async (isActive) => {
  try {
    const params = {}
    if (isActive !== undefined) {
      params.isActive = isActive
    }
    const response = await axios.get(`${API_ROOT}/v1/promotions`, { params })
    return response.data
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch promotions' }
  }
}

export const createPromotionAPI = async (promotionData) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.post(
      `${API_ROOT}/v1/promotions`,
      promotionData,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data.promotion // Trả về promotion thay vì toàn bộ response
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    if (error.response?.status === 403) {
      throw new Error('Bạn không có quyền tạo khuyến mãi')
    }
    throw error.response?.data || { message: 'Failed to create promotion', statusCode: error.response?.status }
  }
}

export const updatePromotionAPI = async (promotionId, promotionData) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.put(
      `${API_ROOT}/v1/promotions/${promotionId}`,
      promotionData,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    if (error.response?.status === 403) {
      throw new Error('Bạn không có quyền cập nhật khuyến mãi')
    }
    throw error.response?.data || { message: 'Failed to update promotion', statusCode: error.response?.status }
  }
}

export const deletePromotionAPI = async (promotionId) => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      throw new Error('No token found, please login again')
    }
    const response = await axios.delete(`${API_ROOT}/v1/promotions/${promotionId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
      throw new Error('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại')
    }
    if (error.response?.status === 403) {
      throw new Error('Bạn không có quyền xóa khuyến mãi')
    }
    throw error.response?.data || { message: 'Failed to delete promotion', statusCode: error.response?.status }
  }
}