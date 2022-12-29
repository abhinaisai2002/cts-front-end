import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const loginUser = createAsyncThunk('users/login', async ({email,password}) => {
    // const respose = await axios.post('URL', {
    //     email,
    //     password
    // }, {
    //     headers: {
    //         'Content-Type':'application/json'
    //     }
    // })
    // return respose.data;
    console.log(email,password)
    return {
        accessToken: '762tryugds67fgds6fgds',
        user: {
            userId:1
        }
    };
});

export default {loginUser}