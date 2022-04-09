import {useEffect, useState} from 'react';
import axios from 'axios';
function Joke1() {

    const [joke, setJoke] = useState([]);
   

    useEffect(() => {

        axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
        .then(res => {
            console.log(res.data.jokes);
            setJoke(res.data.jokes);
            
        })

    }, []);


    return (
        <ul>
            {
                joke.map(u => <li className="joke"  key={u.id}>{u.joke}</li>)
            }

        </ul>
        
    )
}

export default Joke1;