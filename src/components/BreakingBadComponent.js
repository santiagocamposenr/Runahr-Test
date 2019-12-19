import React,{ Component } from "react";
import BreakingBad from './BreakingBad';

class BreakingBadComponent extends Component{
  constructor(props){
      super();

      this.state = {
        characters: []
      }
  }

  componentDidMount(){
      fetch('https://breakingbadapi.com/api/characters')
          .then(response => response.json())
          .then(charactersJson => this.setState({ characters: charactersJson }))
  }

  render(){
    
      const name = this.state.characters[0]
      const fullNames = this.state.characters.map(characters => `${characters.name} + ${characters.nickname}`);
     
      console.log(name);
      console.log(fullNames);
      
      return(
          <div>
            <BreakingBad name={name} />
          </div>
      )
      
  }
}

export default BreakingBadComponent;
