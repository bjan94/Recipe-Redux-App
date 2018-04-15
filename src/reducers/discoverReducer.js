import {
  DISCOVERBIRDS_FUL,
} from '../actions/tweetActions';

// TODO: create a reducer function called discoverReducerw ith initialState
// { discovers: [] }
// if the action passed in is DISCOVERBIRDS_FUL then set discovers equal
// to the data  of that action (refer  to the action caller for details on
// what  that means. else just return the state
//

var discoverReducer = (state={ discovers: [] }, action) => {
  if (action.type === DISCOVERBIRDS_FUL) {
    let tempDiscovered = [];
    const discovered = action.data;
    discovered.forEach((user) => {
      tempDiscovered.push(user);
    });
    return { discovers: tempDiscovered }
  } 
  return state;
}

export default discoverReducer;
