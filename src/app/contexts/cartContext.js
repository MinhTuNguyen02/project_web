"use client"
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react'
import { getCartAPI, getWishlistAPI } from '../api/index'
import { AuthContext } from './AuthContext'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext)
  const [cart, setCart] = useState({ items: [] })
  const [wishlist, setWishlist] = useState({ products: [] })
  const [cartLoading, setCartLoading] = useState(false)
  const [wishlistLoading, setWishlistLoading] = useState(false)

  const fetchCart = useCallback(async () => {
    if (!user) return
    setCartLoading(true)
    try {
      const response = await getCartAPI()
      setCart(response.cart || { items: [] })
    } catch (error) {
      console.error('Failed to fetch cart:', error)
      setCart({ items: [] })
    } finally {
      setCartLoading(false)
    }
  }, [user])

  const fetchWishlist = useCallback(async () => {
    if (!user) return
    setWishlistLoading(true)
    try {
      const response = await getWishlistAPI()
      setWishlist(response.wishlist || { products: [] })
    } catch (error) {
      console.error('Failed to fetch wishlist:', error)
      setWishlist({ products: [] })
    } finally {
      setWishlistLoading(false)
    }
  }, [user])

  const updateCart = (newCart) => {
    setCart(newCart || { items: [] })
  }

  const updateWishlist = (newWishlist) => {
    setWishlist(newWishlist || { products: [] })
  }

  useEffect(() => {
    if (user) {
      fetchCart()
      fetchWishlist()
    } else {
      setCart({ items: [] })
      setWishlist({ products: [] })
    }
  }, [user, fetchCart, fetchWishlist])

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        fetchCart,
        fetchWishlist,
        updateCart,
        updateWishlist,
        cartLoading,
        wishlistLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}