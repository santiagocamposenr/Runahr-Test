import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MockFile from './views/mockfile'

import './App.css';

class App extends Component {
  render(){
      return (
          <Router basename={window.location.pathname || ''}>
              <Switch>
                  <Route exact path='/' component={MockFile}/>
              </Switch>
          </Router> 
      );
  }
}

export default App;
