import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import $api from "../../http";

export const createUser = createAsyncThunk('users/createUser', async (dataRegistration) => {
    const result = await $api.post('/users/signUp', dataRegistration);
    return [result.data];
});

export const getUser = createAsyncThunk('users/getUser', async () => {
    const result = await $api.get(`/users`);
    return result.data;
});


export const authSlice = createSlice({
    name: 'users',
    initialState: { users: [], loading: 'idle', currentUser: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.users.push(...action.payload);
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
        });
    },
});

export default authSlice.reducer;
