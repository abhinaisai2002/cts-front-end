import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const getBlogs = createAsyncThunk('blogs/get', async () => {
    const response = await axios.get('URL',{
        headers: {
            'Content-Type':'application/json'
        }
    })
    return response.data;
});


const getComments = createAsyncThunk('comments/get',async ()=>{
    const response = await axios.get('URL',{
        headers: {
            'Content-Type':'application/json'
        }
    })

    return response.data;

})

const postComment = createAsyncThunk('comments/post',async ()=>{
    const response = await axios.post('URL',{},{
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
})

export default { getBlogs, getComments,postComment };