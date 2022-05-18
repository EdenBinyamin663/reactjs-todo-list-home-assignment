import {map} from 'lodash';
import {TaskCard} from '../task/task-card';
import './todo-list.scss';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from '../spinner/spinner';
import {deleteTodoAction, getTodoListAction, updateTodoAction} from '../../reducers/todo-list-reducer/todo-list.builder';
import {useEffect} from 'react';

export const TodoList = () => {

    const tasks = useSelector(state => state.tasks.tasks);
    const isLoading = useSelector(state => state.tasks.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodoListAction());
    }, [])

    const onTaskClick = (e, task) => {
        if (e.ctrlKey || e.metaKey) {
            dispatch(deleteTodoAction({task}))

            return;
        }

        dispatch(updateTodoAction({task}))
    }

    return <div className='tasks-list'>
        <h1 className='tasks-list-header'>My List</h1>
        {isLoading ? <Spinner/> : <div className="tasks-container">
            {map(tasks, task => <TaskCard task={task} key={task.id} onClick={onTaskClick}/>)}
        </div>}
    </div>

}