import React,{ useState, useEffect } from "react";
import { getCharacters } from '../services/index';


const ListCharacters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const loadCharacters = async () => {
            const response = await getCharacters()
            if(response.status === 200){
                    setCharacters(response.data)
            };
        };
        loadCharacters();
    }, []);
    
    const cardInformation = characters.map
            (characters => 
                    `<li>
                    <p><strong>Nombre:</strong> ${characters.name}</p>
                    name: ${characters.name}  
                    nickname: ${characters.nickname} 
                    status: ${characters.status} 
                    <img src="${characters.img}">
                    img: ${characters.img}
                    <li/>
            `);
    return(
        <div>
            <div>{cardInformation}</div>
        </div>
    );
};

export default ListCharacters;
