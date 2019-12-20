import axios from 'axios'; 

export const SHOW_CHARACTERS = 'SHOW_CHARACTERS';

export const showCharacters = () => {

  return (dispatch, getState) => {
    axios.get('https://breakingbadapi.com/api/characters')
        .then((response) => {
          console.log(response);
          
          dispatch({ type: SHOW_CHARACTERS, payload: response.data })} )

  }

    
  // const characters = [
  //     {id: 1, name: 'Simone'},
  //     {id: 2, name: 'Sim'}
  //   ]

  //   return{
  //     type: SHOW_CHARACTERS,
  //     payload: characters
  //   }
}