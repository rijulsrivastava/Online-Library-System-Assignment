import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './bookSlice'

export const appStore = configureStore({
    reducer: {
        book: bookReducer,
    }
})