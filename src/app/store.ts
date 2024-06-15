import { configureStore } from '@reduxjs/toolkit'
import reducers from "./todoSlice"

export const store = configureStore({
    reducer: reducers,
  })
