import { type as findCurrentItemType } from '../actions/findCurrentItem';
import items from '../../data/items';
const defaultState = {};

const reducer = ( state = defaultState, { type, payload } ) => {
    switch(type){
        case findCurrentItemType:{

            return items.find(n => n.char_id === payload)
        }
        default: 
            return state;
    }
}

export default reducer; 