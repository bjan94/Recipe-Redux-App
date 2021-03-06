import {
  LOADTWEETS_FUL,
  CREATETWEET_FUL,
  FAVORITE_FUL,
} from '../actions/tweetActions';

// TODO: createa  reducer called tweetReducer that has an initalState {}
// if the LOADTWEETS_FUL action occurs, make sure that your eventual
// state would look like
// {
//  whateverTheTweetId: { fullTweetObj },
//  whateverTheTweetId2: { fullTweetobj2 }
//  ...
// }
// basically i should be able to do state[someTweetId] and get the
// full tweet object containing that tweet
// on the CREATETWEET_FUL and FAVORITE_FUL actions, just  set the
// tweet in the state equal to the data you get from the action
var tweetReducer = (state={}, action) => {
  switch (action.type) {
  case LOADTWEETS_FUL:
    const allTweets = action.tweets;
    let tweetMap = {};
    allTweets.forEach((tweet) => {
      tweetMap[tweet.tweetId] = tweet;
    });

    return tweetMap;
  case CREATETWEET_FUL:
    return Object.assign({}, state, action.data);
  case FAVORITE_FUL:
    return Object.assign({}, state, action.data);
  default:
    return state;
  }
  
}

export default tweetReducer;