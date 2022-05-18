import {map} from 'lodash';
import {Task} from '../task/task';
import './tasks-list.scss';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from '../spinner/spinner';
import {deleteTodoAction, updateTodoAction} from '../../reducers/tasks.builder';

export const TasksList = () => {

    const tasks = useSelector(state => state.tasks.tasks);
    const isLoading = useSelector(state => state.tasks.isLoading);

    const dispatch = useDispatch();

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
            {map(tasks, task => <Task task={task} key={task.id} onClick={onTaskClick}/>)}
        </div>}
    </div>

}