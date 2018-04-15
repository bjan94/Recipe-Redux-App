import {
  LOADTWEETS_FUL,
} from '../actions/tweetActions';

// TODO: createa  reducer function named tweetListReducer with initial state
// { ids: [] }.
// When the LOADTWEETS_FUL action occurs, set ids equal to just the tweetId
// for all the tweets from the action
var tweetListReducer = (state={ ids: [] }, action) => {
  if (action.type === LOADTWEETS_FUL) {
    let tempIds = [];
    const allTweets = action.tweets;
    allTweets.forEach((tweet) => {
      tempIds.push(tweet.tweetId);
    });
    return { ids: tempIds }
  } 
  return state;
}
export default tweetListReducer;
