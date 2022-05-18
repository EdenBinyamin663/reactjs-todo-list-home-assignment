import {createAsyncThunk} from '@reduxjs/toolkit';
import {deleteTodo, getTodos, updateTodo} from '../../api';
import {arrayToDictionaryByKey} from '../../utils/utils';
import {omit} from 'lodash';

const TASKS = 'TASKS';
const GET_TASKS = `GET_${TASKS}`;
const UPDATE_TASKS = `UPDATE_${TASKS}`;
const DELETE_TASKS = `DELETE_${TASKS}`;

export const getTodoListAction = createAsyncThunk(`${TASKS}/${GET_TASKS}`, getTodos);

export const updateTodoAction = createAsyncThunk(`${TASKS}/${UPDATE_TASKS}`, async ({task}, {
    rejectWithValue
}) => {
    try {
        await updateTodo({todoId: task.id, update: task})
    } catch (e) {
        return rejectWithValue(task)
    }
},);


export const deleteTodoAction = createAsyncThunk(`${TASKS}/${DELETE_TASKS}`, async ({task}, {
    rejectWithValue
}) => {
    try {
        await deleteTodo({todoId: task.id})
    } catch (e) {
        return rejectWithValue(task)
    }
},);

const handleUpdateTodoCases = (state, {meta: {arg: {task}}}) => {
    state.tasks[task.id].completed = !state.tasks[task.id].completed;
}

export const todoListBuilder = builder => {
    builder
        .addCase(updateTodoAction.pending, handleUpdateTodoCases)
        .addCase(updateTodoAction.rejected, handleUpdateTodoCases)
        .addCase(deleteTodoAction.pending, (state, {meta: {arg: {task}}}) => {
            state.tasks = omit(state.tasks, task.id)
        })
        .addCase(deleteTodoAction.rejected, (state, {meta: {arg: {task}}}) => {
            state.tasks[task.id] = task;
        })
        .addCase(getTodoListAction.pending, state => {
            state.isLoading = true;
        })
        .addCase(getTodoListAction.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.tasks = arrayToDictionaryByKey(payload, 'id');
        })
        .addCase(getTodoListAction.rejected, state => {
            state.isLoading = false;
        });
};