import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        showLoading:true
    },
    reducers: {
        showLoading(state) {
            state.showLoading = true;
        },
        hideLoading(state) {
            state.showLoading = false
        }
    }
})

export default loadingSlice;

export const loadingActions = loadingSlice.actions;