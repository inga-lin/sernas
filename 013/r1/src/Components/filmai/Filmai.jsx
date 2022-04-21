import { useEffect, useState } from "react";
import axios from 'axios';
import MovieList from "./MovieList";
//import Filmas from "./Filmas";
function Filmai(){


    const [users, setUsers] = useState([]);
    const [inputText, setInputText] = useState('car');
    

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=13e0bada9ae6d703bc0c36703e5628fa&language=en-US&query=${inputText}`)
        .then(res => {
            console.log(res.data);
            setUsers(res.data.results);
            
        })
    },[inputText]);

   const handeleImputChange = (e) => {
  console.log(setInputText);
   }
  
    return (

        <>
          <input onChange={(e) => handeleImputChange(e)}>
          </input>
        <ul>
            
           <MovieList filmai={users}></MovieList>
            

        </ul>
        </>
    )
}

export default Filmai;

// users.map(u => <img key={u.id} alt="aik" src={u.avatar}></img>)


/*
            {
                users.map((filmas) => <Filmas key={filmas.id} filmas={filmas}></Filmas> )
            }*/
//users.map((movie) => <p> {movie.title}</p>)