import { createSlice } from "@reduxjs/toolkit";
import blogsThunks from '../thunks/blogsThunk';

const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        blogs:null,
    },
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(blogsThunks.getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload.blogs;
        })
    }
})

export default blogSlice;