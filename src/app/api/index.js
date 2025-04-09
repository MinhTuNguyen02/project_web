import axios from 'axios'
import { API_ROOT } from '../../../untils/constant'

export const fetchWarehouseDetailAPI = async (warehouseID) => {
    const response = await axios.get(`${API_ROOT}/v1/warehouses/${warehouseID}`)
    return response.data
}

export const fetchCategoryAPI = async () => {
    const response = await axios.get(`${API_ROOT}/v1/categories`)
    return response.data
}

export const fetchProductAPI = async (categoryId = '') => {
    const url = categoryId 
      ? `${API_ROOT}/v1/products?categoryId=${categoryId}`
      : `${API_ROOT}/v1/products`
    const response = await axios.get(url)
    return response.data
}

export const createNewCategoryAPI = async (newCategoryData) => {
    const response = await axios.post(`${API_ROOT}/v1/categories`, newCategoryData)
    return response.data
}

export const createNewProductAPI = async (newProductData) => {
    const response = await axios.post(`${API_ROOT}/v1/products/${newProductData}`)
    return response.data
}