import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import $api from "../../http";

export const createUser = createAsyncThunk('users/createUser', async (dataRegistration) => {
    const result = await $api.post('/users/signUp', dataRegistration);
    return [result.data];
});

export const authSlice = createSlice({
    name: 'users',
    initialState: { users: [], loading: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.users.push(...action.payload);
            console.log('state.users', state.users);
        });
    },
});

export default authSlice.reducer;
