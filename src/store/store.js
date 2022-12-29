import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import blogSlice from './slices/blogSlice';
import loadingSlice from './slices/loadingSlice';
import modalSlice from './slices/modalSlice';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        blogs: blogSlice.reducer,
        modal: modalSlice.reducer,
        loading:loadingSlice.reducer
    }
})

export default store;