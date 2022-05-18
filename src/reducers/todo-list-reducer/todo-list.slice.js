import {createSlice} from '@reduxjs/toolkit';
import {todoListBuilder} from './todo-list.builder';

const initialState = {
    isLoading: true,
    tasks: {}
};

export const todoListSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: todoListBuilder
});