import { createStore } from 'redux'
import AllReducers from './Redux/reducers/Index';


const store = createStore(
        AllReducers
);

export default store;