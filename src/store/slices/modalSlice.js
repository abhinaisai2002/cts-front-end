import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        show: false,
        title: null,
        body: null
    },
    reducers: {
        openModal(state, {payload}) {
            state.show = true;
            state.title = payload.title;
            state.body = payload.body;
        },
        closeModal(state) {
            state.show = false;
            state.title = null;
            state.body = null; 
        }
    }
})

export default modalSlice;
export const modalActions = modalSlice.actions; 