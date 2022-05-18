import {createSlice} from '@reduxjs/toolkit';
import {tasksBuilder} from './tasks.builder';

const initialState = {
    isLoading: true,
    tasks: {}
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: tasksBuilder
});

// export const {getUserDataFromStorage, clearUserData} = authenticationSlice.actions;