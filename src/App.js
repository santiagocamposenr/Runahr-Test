import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Results from './components/results';
import Details from './components/details';

import store from './redux/store';

import './App.css';

class App extends Component {
  render(){
      return (
            <Provider store={store}>
                    <BrowserRouter>
                            <Switch>
                                    <Route path='/details/:itemId' component={Details} />
                                    <Route path='/results' component={Results} />
                                    <Redirect from='/' to='/results' />
                            </Switch>
                    </BrowserRouter>
             </Provider>
      );
  }
}

export default App;

// React-redux - integration between component's react and redux: PROVIDER