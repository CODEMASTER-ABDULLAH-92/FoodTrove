import { configureStore } from '@reduxjs/toolkit'
import pop from '../feacture/popular'
export const store = configureStore({
  reducer: {
    populars:pop,
  },
})