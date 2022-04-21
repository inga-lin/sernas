import { useEffect, useState } from "react";
import axios from 'axios';
//import Filmas from "./Filmas";
function Filmai(){


    const [users, setUsers] = useState([]);
    

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/550?api_key=13e0bada9ae6d703bc0c36703e5628fa')
        .then(res => {
            console.log(res.data);
            setUsers(res.data);
            
        })
    },[]);
  
    return (
        <ul>
            
            {
                users.map(u => <li key={u.id}>{u.budget}</li>)
            }
            

        </ul>
    )
}

export default Filmai;

// users.map(u => <img key={u.id} alt="aik" src={u.avatar}></img>)


/*
            {
                users.map((filmas) => <Filmas key={filmas.id} filmas={filmas}></Filmas> )
            }*/
