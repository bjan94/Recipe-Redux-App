import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTweets, getDiscoverBirds } from '../actions/tweetActions';
import { changeVideo, likeRecipe } from '../actions/feedActions';

import VideoList from './video_list';
import VideoDetail from './video_detail';

import YTSearch from 'youtube-api-search';
import FoodList from '../utils/foodlist';
const API_KEY = 'AIzaSyAN7ZYLG9K4TblvTvTg-1s9jbCUKqKhdWM';

class NewsFeed extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null,
      term: null
    };

    
    this.props.changeVideo();
  }

  render() {

    return (
      <div className="row">
        <VideoDetail onNext={this.props.changeVideo} onLike = {this.props.likeVideo} video={this.props.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.props.videos} />
      </div>
    )

  }
}

const mapStateToProps = state => state.feedReducer;

const mapDispatchToProps = dispatch => ({
  changeVideo: () => dispatch(changeVideo()),
  likeVideo: () => dispatch(likeRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
