import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './bookSlice'


// configureStore creates the store
export const appStore = configureStore({

    // reducer is used to manage the state of book
    reducer: {
        book: bookReducer,
    }
})