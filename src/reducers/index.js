import { combineReducers } from 'redux';
import resortReducer  from './resortReducer';


export default combineReducers({
	resort: resortReducer,
});
