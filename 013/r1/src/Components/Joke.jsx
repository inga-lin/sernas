

const Joke = ({joke}) => {

   console.log(joke);
    return (
        <li>
            {
                joke.type === "twopart" && <i style={{color:'red'}}>{joke.delivery}</i>
            }
            {
               joke.type === "twopart" ? <p style={{color:'pink'}}>{joke.setup}</p> : <p style={{color:'blue'}}>{joke.joke}</p>
            }


        </li>
        
    )
}

export default Joke;

/*import {useEffect, useState} from 'react';
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

export default Setup;*/


/*
{
    "error": false,
    "amount": 10,
    "jokes": [
        {
            "category": "Programming",
            "type": "single",
            "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 259,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why did the web developer walk out of a resturant in disgust?",
            "delivery": "The seating was laid out in tables.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 6,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why did the database administrator leave his wife?",
            "delivery": "She had one-to-many relationships.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 265,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "What is a dying programmer's last program?",
            "delivery": "Goodbye, world!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 56,
            "safe": true,
            "lang": "en"
        },
*/