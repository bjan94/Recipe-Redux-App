import React, { Component } from 'react';
import TweetList from './TweetList';
import ProfileBox from './ProfileBox';
import { getUser, favUnfav } from '../actions/profileActions';
import { connect } from 'react-redux';
import _ from 'lodash';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  getUser() {
    dispatch(_.partial(this.props.user, this.props.match.params.id));
  }

  render() {

    return(
      <div className="container">
        <h2>Profile</h2>
        <div className="row">
          <div className="col-md-4">
            
          </div>
          <div className="col-md-8">

          </div>
        </div>
      </div>
    )
  }
}



const mapDispatchToProps = dispatch => ({
  // optionally use this to handle assigning dispatch actions to props
  user: (id) => dispatch(getUser(id))
});


export default connect(null, mapDispatchToProps)(Profile);
