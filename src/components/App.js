import React, { Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
// TODO: Determine appropriate imports
import Profile from './Profile';
import SignX from './SignX';
import Logout from './Logout';
import AuthHOC from './AuthHOC';
import NavBar from './NavBar';
import Flashes from './Flashes';
import NewsFeed from './NewsFeed'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <NavBar component={NavBar}/>
        <Flashes component={Flashes}/>
        <Router>
          <div>
            <Switch>        
              <Route path="/signx" component={SignX}/>
              <Route path="/logout" component={AuthHOC(Logout)}/>
              <Route path="/feed" component={AuthHOC(NewsFeed)}/>
              <Route path="/profile/:id" component={AuthHOC(Profile)}/>
              <Route component={SignX}/>
            </Switch>
          </div>
        </Router>
      </div>
    ); 
  }
}


export default App;
