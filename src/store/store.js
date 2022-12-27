import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import blogSlice from './slices/blogSlice';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        blogs: blogSlice.reducer
    }
})

export default store;