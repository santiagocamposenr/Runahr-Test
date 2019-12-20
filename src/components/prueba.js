import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux';

import { showCharacters } from '../redux/actions/characteresAction';

class Prueba extends Component{
  componentWillMount(){
    this.props.showCharacters()
  }

  renderUserList(){
    return this.props.characters.map((character) => {
      return (
        <li key={character.char_id}>
            {character.name} 
        </li>
      )
    })
  }

  render(){
    return(
      <div>Prueba
        <h2>lista</h2>
        <ul>{this.renderUserList()}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.showCharacters.list
  }
}

export default connect(mapStateToProps, { showCharacters })(Prueba) 