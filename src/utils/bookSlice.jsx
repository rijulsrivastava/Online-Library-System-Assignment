import { createSlice } from "@reduxjs/toolkit";
import {Books} from './dummyData'

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        items: Books
    },
    reducers: {
        addItem: (state, action) => {
            state.items.unshift(action.payload)
        },
    }
})

export const {addItem, removeItem} = bookSlice.actions
export default bookSlice.reducer