import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

//Components
import Results from './components/results';
import Details from './components/details';

//Redux
import store from './redux/store';


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
  };
};

export default App;
