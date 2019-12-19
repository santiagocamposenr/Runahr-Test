import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// import ListCharacters from './components/ListCharacters'
//COMPONENTS
import Results from './components/results';
import Details from './components/details';


import './App.css';

class App extends Component {
  render(){
      return (
          <Router basename={window.location.pathname || ''}>
              <Switch>
                  {/* <Route exact path='/' component={ListCharacters}/> */}
                  <Route exact path='/results' component={Results}/>
                  <Route exact path='/details:itemId' component={Details}/>
                  <Redirect from ='/' to='/results' />

              </Switch>
          </Router> 
      );
  }
}

export default App;
