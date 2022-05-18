import {todoListSlice} from '../reducers/todo-list-reducer/todo-list.slice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        tasks: todoListSlice.reducer
    },
    devTools: true,
});