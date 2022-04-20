import { useEffect, useState } from "react";
import axios from 'axios';
function Avatar(){


    const [users, setUsers] = useState([]);
    

    useEffect(() => {

        axios.get('https://reqres.in/api/users?delay=3')
        .then(res => {
            console.log(res.data.data);
            setUsers(res.data.data);
        })
    },[]);
  
    return (
        <ul>
            
            {
               users.length ? users.map(u => <img key={u.id} alt="aik" src={u.avatar}></img>) : <div className="loader"></div> 
            }
            

        </ul>
    )
}

export default Avatar;

//Padaryt tą patį, bet kol vyksta kreipimasis į serverį, vietoj avatarų rodyti kokį nors loaderį DONE!