import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false
}

export const loginSlice = createSlice({
    name: 'userlogin',
    initialState,
    reducers: {
        
        authenticated: (state, action) => {
            state.isLoggedIn = action.payload
        },
        notAuthenticated: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
});

export const { authenticated, notAuthenticated } = loginSlice.actions;

export default loginSlice.reducer;