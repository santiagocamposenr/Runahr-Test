export const type = 'findSuggestions';

const findSuggestions = text => {
    return{
        type,
        payload: text,

    }; 
};

export default findSuggestions;

// The logic is not here, it's in reducers