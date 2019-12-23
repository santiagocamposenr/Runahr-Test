export const type = 'findCurrentItem';

const findCurrentItem = char_id => {
    return{
        type,
        payload: char_id,
    }; 
};

export default findCurrentItem;

