export const type = 'findResults';

const findResults = text => {
    return{
        type,
        payload: text,

    }; 
};

export default findResults;

// The logic is not here, it's in reducers