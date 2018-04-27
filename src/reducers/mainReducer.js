import { combineReducers } from 'redux';
// TODO: determine appropriate imports
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import feedReducer from './feedReducer';


var tweetApp = combineReducers({
  authReducer,
  messageReducer,
  profileReducer,
  feedReducer
});

export default tweetApp;
