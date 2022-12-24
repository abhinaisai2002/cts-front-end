import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        accessToken: null,
        refreshToken:null,
    },
    reducers: {
        signUp(state,payload) {
            
        },
        signIn(state, payload) {
            
        },
        logOut(state) {
            
        }
    }
});

export default authSlice;