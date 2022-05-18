import App from "./App";
import {Provider} from 'react-redux';
import {store} from './redux/store';

export function Main() {
    return <Provider store={store}>
        <App/>
    </Provider>
}
