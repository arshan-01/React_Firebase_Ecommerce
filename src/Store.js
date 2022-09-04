import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import AllReducers from './Redux/reducers/Index';


const store = createStore(
        AllReducers,
        composeWithDevTools()
);

export default store;