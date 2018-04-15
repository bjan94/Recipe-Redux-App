import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './Tweet';

class TweetList extends Component {
  constructor() {
    super();
    this.interval = null;
  }

  componentDidMount() {
    // TODO: load the tweets and set up an interval
    // that loads the tweets again every 2500 ms
    // Think about how you'd be able to load tweets
    // without doing additional imports...
    this.interval = setInterval(() => {
      this.props.loadTweets();
    }, 2500);   
  }

  componentWillUnmount() {
    // TODO: when the component is about to unmount
    // clear the interval (the one running every 2500 ms
    // ie stop  the refreshing)
    clearInterval(this.interval);
  }

  render() {
    // TODO: render out your  tweets (use the Tweet component with
    // appropriate arguments `id` to represent  the tweetId and
    // a key for react
    // ultimate html should look like
    // <div class="col-md-12">
    //  ...bunch o tweets
    // </div>
    let tweets = this.props.ids.map((id, idx) => {
      return <Tweet id={id} key={idx}/>
    });

    return (
      <div className="col-md-12">
        {tweets}
      </div>
    );
  }
}

const mapStateToProps = state => state.tweetListReducer;


export default connect(
  mapStateToProps,
  null
)(TweetList);
