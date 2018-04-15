// TODO: createa reducer function messageReducer that has  an initialState
// { messages: [] }
// If any action has a property 'error' on it, then append to the messages
// array a new object
//    { messageType: 'error' if the  action has an error  property else 'info',
//      message: action.error if an error else action.message
//    }
// Also handle the case where the action type is DISMISS
// if that happens, then remove from the messages array the index supplied
// with the dismiss  action
// remember all these changes must be immutable (I use mutable language
// terms for simplicity

var messageReducer = (state={ messages: [] }, action) => {
  let tempMessages = state.messages.slice(0);
  if (action.error) {
    tempMessages.push({
      messageType: 'error',
      message: action.error
    });
  } else if (action.message) {
    tempMessages.push({
      messageType: 'info',
      message: action.message
    });
  } else if (action.type === 'DISMISS') {
    tempMessages.splice(action.idx, 1);
  }
  return Object.assign({}, state, {messages: tempMessages});
}

export default messageReducer;
