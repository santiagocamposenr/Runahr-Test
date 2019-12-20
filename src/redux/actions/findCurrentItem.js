export const type = 'findCurrentItem';

const findCurrentItem = id => {
    return{
        type,
        payload: id,

    }; 
};

export default findCurrentItem;

// The logic is not here, it's in reducers