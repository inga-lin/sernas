import {useEffect, useState} from 'react';
import axios from 'axios';
function Setup() {

    const [setup, setSetup] = useState([]);
   

    useEffect(() => {

        axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
        .then(res => {
            console.log(res.data.jokes);
            setSetup(res.data.jokes);
            
        })

    }, []);


    return (
        <ul>
            {
                setup.map(u => <li className="setup" key={u.id}>{u.setup}{u.delivery}</li>)
            }


        </ul>
        
    )
}

export default Setup;