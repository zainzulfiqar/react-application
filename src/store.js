import {createStore,combineReducers} from 'redux';
import {users} from "./reducers/reducers-users";
const allReducer = combineReducers({users});

let store = createStore(allReducer);

export default store;