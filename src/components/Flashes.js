import React, { Component } from 'react';
import { connect } from 'react-redux';


class Flashes extends Component {
  constructor() {
    super();
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.props.dismiss(0);
  }

  render() {
    // TODO: ultimate html structure will look like
    // <div>
    //  <div class="alert alert-danger">${message.toString()}. Click to dismiss.</div>
    //  <div class="alert alert-info">${message.toString()}. Click to dismiss.</div>
    //  ...
    // </div>
    let messages = this.props.messages.map((messageObj, idx) => {
      let message = messageObj.message;
      return <div className="alert alert-info" onClick={this.onDismiss} key={idx}>{message.toString()}. Click to dismiss.</div>
    });

    return (
      <div>
        {messages}
      </div>
    );
  }
}

// TODO:  needs  to somehow listen to the state of messageReducer via its props.
// you could almost say you're mapping the state to props...

const mapStateToProps = (state) => {
  let {messageReducer} = state;
  // let messageReducer = state.messageReducer;
  // return messageReducer 
  return messageReducer;
}

// TODO: map a prop `dispatch` that will dispatch an  action
// { type: 'DISMISS',  idx: someIndex }
// ultimate call to it should look like this.props.dismiss(idx)

const mapDispatchToProps = dispatch => {
  return {
    dismiss: (idx) => dispatch({type: 'DISMISS', idx: idx})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flashes);
