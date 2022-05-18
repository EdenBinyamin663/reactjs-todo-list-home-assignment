import './App.scss';
import {useEffect} from 'react';
import {TodoList} from './components/todo-list/todo-list';
import {useDispatch} from 'react-redux';
import {getTodosAction} from './reducers/todo-list-reducer/todo-list.builder';

export default function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosAction());
    }, [])

    return (
        <div className='app-root'>
            <TodoList/>
        </div>
    );
}
