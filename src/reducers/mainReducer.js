import { combineReducers } from 'redux';
// TODO: determine appropriate imports
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import tweetListReducer from './tweetListReducer';
import tweetReducer from './tweetReducer';
import discoverReducer from './discoverReducer';
// TODO: you should somehow * combine reducers * hint hint
// so that the reducer looks like
// {
//  authReducer: { isAuthenticated: ...  }
//  tweetList:  { ids: [...] } 
//  tweet: { id1: {...}, id2: {...} ... }
//  profileReducer: { profile: { name: '', species: '' ... }}
//  messageReducer: { messages: [ { messageType: ..., message: ...}, ...] }
//  discoverReducer: { discovers: [...] }
// }
// store this reducer in a variable 'tweetApp'

// let tweetApp = combineReducers({
//   authReducer,
//   tweetListReducer,
//   tweetReducer,
//   profileReducer,
//   messageReducer,
//   discoverReducer
// });

var tweetApp = combineReducers({
  authReducer,
  messageReducer,
  tweetReducer,
  tweetListReducer,
  discoverReducer,
  profileReducer
});

export default tweetApp;
