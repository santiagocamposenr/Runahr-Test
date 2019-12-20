import axios from 'axios';
import React from 'react'

const baseURL = process.env.REACT_APP_BASE_URL

const getCharacters = async () => {
    try {
        const response = await axios({
            url: `${baseURL}`,
            method: 'GET'
        })      
        
        return response
    } catch (e) {
        console.log(e);
    }

    return(<div>h</div>)
}

export default getCharacters