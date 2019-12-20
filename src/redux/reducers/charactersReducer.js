import { SHOW_CHARACTERS } from '../actions/characteresAction'

const initialState = {
  list: []
}

export const showCharacters = (state = initialState, action) => {
  switch(action.type){
      case SHOW_CHARACTERS: 
          return Object.assign({}, state, {list: action.payload})
      default:
          return state;

  }
}