import { configureStore } from '@reduxjs/toolkit'
import productsSLiceReducer from './slices/products-slice'
import cartSliceReducer from './slices/cart-slice'

export const store = configureStore({
  reducer: {
    products:productsSLiceReducer,
    cart: cartSliceReducer
  },
})