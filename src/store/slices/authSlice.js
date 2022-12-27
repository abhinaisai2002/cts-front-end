import { createSlice } from '@reduxjs/toolkit';
import  userThunks  from '../thunks/usersThunk';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: true,
        user: null,
        accessToken: null,
    },
    reducers: {
        logOut(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.accessToken = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(userThunks.loginUser.fulfilled, (state,action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;

        })
    }
});

export default authSlice;