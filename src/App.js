import React from 'react';
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route path='/home'>
                  <Home></Home>
              </Route>
              <Route path='/post/:ShowDetails'>
                  <PostDetails></PostDetails>
              </Route>
              <Route exact path='/'>
                  <Home></Home>
              </Route>
              <Route path='*'>
                  <NotFound></NotFound>
              </Route>
          </Switch>
      </Router>
        
    </div>
  );
}

export default App;
