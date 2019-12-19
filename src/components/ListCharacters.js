import React,{ useState, useEffect } from "react";
import { getCharacters } from '../services';
import BreakingBad from './BreakingBad';

// class BreakingBadComponent extends Component{
//   constructor(props){
//       super();

//       this.state = {
//         characters: []
//       }
//   }

//   componentDidMount(){
//       fetch('https://breakingbadapi.com/api/characters')
//           .then(response => response.json())
//           .then(charactersJson => this.setState({ characters: charactersJson }))
//   }

//   render(){
    
//       const name = this.state.characters[0]
//       const fullNames = this.state.characters.map(characters => `${characters.name} + ${characters.nickname}`);

//       const cardInformation = this.state.characters.map(characters => 
//         `
//         name: ${characters.name} 
//         nickname: ${characters.nickname} 
//         status: ${characters.status} 
//         img: ${characters.img}
//         `);
     
//       console.log(name);
//       // console.log(fullNames);
//       console.log(cardInformation);
      
//       return(
//           <div>
//             <BreakingBad name={cardInformation} />
//           </div>
//       )
      
//   }
// }


const ListCharacters = () => {
    const [isLoading, setisLoading] = useState(true)
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const loadCharacters = async () => {
            const response = await getCharacters()
            console.log(response);

            if(response.status === 200){
                    setCharacters(response.data)
            }

            const name = response.data
            console.log('hola', name);
            
        }
        loadCharacters();
    }, [])

    return(
        <div>ListCharacters</div>
    )
}

export default ListCharacters;
