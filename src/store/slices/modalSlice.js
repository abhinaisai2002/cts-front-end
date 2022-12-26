import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        show: false,
        title: null,
        body: null,
        footer:null
    },
    reducers: {
        openModal(state, payload) {
            
        },
        closeModal(state, payload) {
            
        }
    }
})

export default modalSlice;