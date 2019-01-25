import { combineReducers } from 'redux';
import blogs from './blogs';
import comments from './comments';

export default combineReducers({
  blogs,
  comments
});
