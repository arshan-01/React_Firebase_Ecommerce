import {combineReducers} from 'redux'
import { CartReducer } from './Reducer'


const AllReducers = combineReducers({
    CartReducer : CartReducer,
})
export default AllReducers;