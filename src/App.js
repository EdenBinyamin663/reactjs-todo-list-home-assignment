import './App.scss';
import {useEffect} from 'react';
import {TasksList} from './components/tasks-list/tasks-list';
import {useDispatch} from 'react-redux';
import {getTodosAction} from './reducers/tasks.builder';

export default function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosAction());
    }, [])

    return (
        <div className='app-root'>
            <TasksList/>
        </div>
    );
}
