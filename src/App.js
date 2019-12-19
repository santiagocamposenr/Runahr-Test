import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import BreakingBadComponent from './components/BreakingBadComponent'

import './App.css';

class App extends Component {
  render(){
      return (
          <Router basename={window.location.pathname || ''}>
              <Switch>
                  <Route exact path='/' component={BreakingBadComponent}/>
              </Switch>
          </Router> 
      );
  }
}

export default App;
