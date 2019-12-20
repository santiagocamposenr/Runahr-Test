import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Details extends Component {
  render(){
      const { suggestions } = this.props;
      console.log(suggestions);
      
      return(
          <Page suggestions={suggestions} />
      )
  }
}

const mapStateToProps = (state) => {
    return{
      suggestions: state.suggestions
    }
};

export default connect(mapStateToProps)(Details);

// with connect we can connect the component with the state. Need two arguments, the first one is mapStateToProps, the second one is mapDispatchToProps

// state's mapStateToProps is our reducer of the store 
