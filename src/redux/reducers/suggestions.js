const defaultState = [
    {
        id: 1,
        title: 'findSuggestions'
    }
];

const reducer = ( state = defaultState, { type, payload } ) => {
    switch(type){
        case 'findSuggestions': {
            return [
                {
                    id: 1,
                    title: 'findSuggestions'
                }
            ]
        }
        default: 
            return state;
    }
}

export default reducer; 


// defaultState is the container of data's API