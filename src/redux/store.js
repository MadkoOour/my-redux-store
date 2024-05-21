import { configureStore } from '@reduxjs/toolkit'
import productsSLiceReducer from './slices/products-slice'

export const store = configureStore({
  reducer: {
    products:productsSLiceReducer,
  },
})