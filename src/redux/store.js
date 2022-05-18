import {tasksSlice} from '../reducers/tasks.slice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    },
    devTools: true,
});