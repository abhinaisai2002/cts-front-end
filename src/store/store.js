import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import blogSlice from './slices/blogSlice';
import modalSlice from './slices/modalSlice';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        blogs: blogSlice.reducer,
        modal:modalSlice.reducer
    }
})

export default store;