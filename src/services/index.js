import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL

export const getCharacters = async () => {
    try {
        const response = await axios({
            url: `${baseURL}`,
            method: 'GET'
        })      
        
        return response
    } catch (e) {
        console.log(e);
    }
}