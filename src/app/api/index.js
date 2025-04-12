import axios from 'axios'
import { API_ROOT } from '../../../untils/constant'

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
export const fetchProductAPI = async (categoryId = '') => {
    const url = categoryId 
      ? `${API_ROOT}/v1/products?categoryId=${categoryId}`
      : `${API_ROOT}/v1/products`
    const response = await axios.get(url)
    return response.data
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