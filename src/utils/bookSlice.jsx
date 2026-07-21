import { createSlice } from "@reduxjs/toolkit";
import {Books} from './dummyData'


// create slice is used to create book slice in the store
const bookSlice = createSlice({
    name: 'book',

    //In initialState dummyBooks data are stored
    initialState: {
        items: Books
    },
    reducers: {
        // to add new books in the store here addItem is defined
        addItem: (state, action) => {
            state.items.unshift(action.payload)
        },
    }
})

export const {addItem} = bookSlice.actions
export default bookSlice.reducer