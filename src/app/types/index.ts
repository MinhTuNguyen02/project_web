export interface Address {
  _id: string
  userId: string
  recipientName: string
  phoneNumber: string
  address: string
  isDefault: boolean
  createdAt: number
  updatedAt: number
}

export interface productCart {
  productId: Product
  quantity: number
}
export interface Cart {
  _id: string
  userId: string
  items: productCart[]
  createdAt: number
  updatedAt: number
  _destroy: boolean
}

export interface Category {
  _id: string
  categoryName: string
  description: string
  createdAt: number
  updatedAt: number
  _destroy: boolean
  img: string
}

export interface Message {
  _id: string
  type: 'contact' | 'subscription'
  fullName?: string
  email: string
  phone?: string
  content: string
  createdAt: number
  updatedAt: number
  _destroy: boolean
}

export interface News {
  _id: string
  title: string
  content: string
  createdAt: number
  updatedAt: number
  _destroy: boolean
  img: string
}

export interface OrderItem {
  productId: Product
  productName: string
  quantity: number
  price: number
}
export type ShippingMethod = "standard" | "express"
export interface shippingInfo {
  fullName: string
  email: string
  phone: string
  address: string
  note: string
  shippingMethod: ShippingMethod
}
export interface PromotionOrder {
  code: string
  discount: number
}
export type PaymentMethod = "cod" | "bank"
export interface Order {
  _id: string
  userId: string
  items: OrderItem[]
  shippingInfo: shippingInfo
  paymentMethod: PaymentMethod
  shippingFee: number
  total: number
  promotion?: PromotionOrder
  status: string
  createdAt: number
  updatedAt: number
}

export interface Product {
  _id: string
  categoryId: string
  productName: string
  description: string
  price: number
  img: string[]
  inventory: number
  createdAt: number
  updatedAt: number
  _destroy: boolean
  purchaseCount: number
}

export interface Promotion {
  _id: string
  code: string
  type: string
  value: number
  minOrderValue: number
  startDate: number
  endDate: number
  maxUses: number
  maxUsesPerUser: number
  isActive: boolean
  usedCount: number
  createdAt: number
  updatedAt: number
  _destroy: boolean
}

export interface User {
  _id: string
  email: string
  password: string
  fullName: string
  phoneNumber: string
  role: string
  createdAt: number
  updatedAt: number
}

export interface Wishlist {
  _id: string
  userId: string
  products: string[]
  createdAt: number
  updatedAt: number
  _destroy: boolean
}

// export interface CartContextType {
//   cart: Cart | null
//   wishlist: Wishlist | null
//   fetchCart: () => Promise<void>
//   fetchWishlist: () => Promise<void>
//   updateCart: (cart: Cart | null) => void
//   updateWishlist: (wishlist: Wishlist | null) => void
//   cartLoading: boolean
//   wishlistLoading: boolean
// }

export interface ShippingRate {
  distance: number
  baseFee: number
  rate: number
}

export interface ShippingRates {
  [key: string]: ShippingRate
}

export interface Stat {
  date?: string 
  month?: string 
  year?: string 
  totalRevenue: number
  orderCount: number
  itemCount: number
}

export interface TopProduct {
  productId: string
  productName: string
  totalQuantity: number
  totalRevenue: number
  img: string[]
}

export type PasswordField = 'oldPassword' | 'newPassword' | 'confirmPassword'
export type PasswordFieldLogin = 'loginPassword' | 'signinPassword' | 'confirmPassword'