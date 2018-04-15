import React, { Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
// TODO: Determine appropriate imports
import Profile from './Profile';
// import EditProfile from './EditProfile';
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
    // TODO: should create a router with the following structure
    // /profile/:id? => Profile must be protected (hint how  can we use AuthHOC?)
    // /signx => SignX
    // /logout => Logout (must be protected)
    // /edit-profile  => EditProfile must be authenticated
    // /feed => NewsFeed must be authenticated
    // If it doesn't match anything, just put  the following syntax to say, render the signx page
    // <Route component={SignX}/>
    // Note the above should all be within a switch
    //
    // final html structure will look like
    //
    // <div class="container-fluid">
    //    ...navigation bar from NavBar
    //    ...flashes from Flashes
    //    <div>
    //      .. whatever route we are on
    //    </div>
    //  </div>

          // <Route path="/profile/:id?" component={AuthHOC(Profile)}/>
          // <Route path="/logout" component={Logout}/>
          // <Route path="/edit-profile" component={EditProfile}/>
          // <Route path="/feed" component={NewsFeed}/>
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
