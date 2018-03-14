import {combineReducers} from 'redux';
import NamesReducer from './reducer_names';
import SearchReducer from './reducer_search';
import {SEARCH_INPUT_CHANGED} from '../actions/main';

const rootReducer = combineReducers({
    names: NamesReducer,
    search: SearchReducer
});
export default rootReducer;
