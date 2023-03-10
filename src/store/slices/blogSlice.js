import { createSlice } from "@reduxjs/toolkit";
import blogsThunks from "../thunks/blogsThunk";

const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        blogs:[],
        comments:[],
    },
    extraReducers(builder) {
        builder.addCase(blogsThunks.getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload;
            
        });
        builder.addCase(blogsThunks.getComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        });
        builder.addCase(blogsThunks.postComment.fulfilled, (state, action) => {
            const comments = [...state.comments];
            comments.push(action.payload);
            state.comments = comments;
        });
    }
})

export default blogSlice;