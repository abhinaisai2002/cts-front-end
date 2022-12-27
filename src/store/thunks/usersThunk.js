import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const loginUser = createAsyncThunk('users/login', async () => {
    const respose = await axios.post('URL', {}, {
        headers: {
            'Content-Type':'application/json'
        }
    })
    return respose.data;
});

export default {loginUser}