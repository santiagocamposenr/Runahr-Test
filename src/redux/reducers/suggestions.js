import{ type as findSuggestionsType } from '../actions/findSuggestions';
import items from '../../data/items';

const defaultState = []

const reducer = ( state = defaultState, { type, payload } ) => {
    switch(type){
        case findSuggestionsType: {
            const regex =  new RegExp(`^${payload}`, 'i');
            return items.filter(n => regex.test(n.name ))
        }
        default: 
            return state;
    }
}

export default reducer; 


// defaultState is the container of data's API