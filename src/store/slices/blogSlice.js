import { createSlice } from "@reduxjs/toolkit";
import blogsThunk from "../thunks/blogsThunk";
import blogsThunks from '../thunks/blogsThunk';

const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        blogs:null,
        comments:null,
    },
    extraReducers(builder) {
        builder.addCase(blogsThunks.getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload;
        }),
        builder.addCase(blogsThunks.getComments.fulfilled,(state, action) => {
            state.comments = action.payload;
        }),
        builder.addCase(blogsThunk.postComment.fulfilled,(state,action) => {
            const comments = [...state.comments];
            comments.push(action.payload);
            state.comments = comments;
        })
    }
})

export default blogSlice;