import { createSlice } from "@reduxjs/toolkit";
import {Books} from './dummyData'

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        items: Books
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push()
        },
        removeItem: (state) => {
            state.items.pop()
        },
    }
})

export const {addItem, removeItem} = bookSlice.actions
export default bookSlice.reducer