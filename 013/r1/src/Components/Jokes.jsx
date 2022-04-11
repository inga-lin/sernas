import {useEffect, useState} from 'react';
import Joke from './Joke'
//import axios from 'axios';
function Jokes() {

    const [jokes, setJokes] = useState([]);
   

    useEffect(() => {

        fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')
        .then((res) => res.json())
        .then((result) => { 
            setJokes(result.jokes);
            
        })
        .catch((error) => console.log(error));
    }, []);


    return (
        <ul>
            {
                jokes.map((joke) =>(<Joke key={joke.id} joke={joke}></Joke>) )
            }

        </ul>
        
    )
}

export default Jokes;

/*import {useEffect, useState} from 'react';
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

export default Joke1;*/