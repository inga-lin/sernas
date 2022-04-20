import { useEffect, useState } from "react";
import axios from 'axios';
function Avatar(){


    const [users, setUsers] = useState([]);
    

    useEffect(() => {

        axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            console.log(res.data.data);
            setUsers(res.data.data);
        })
    },[]);
  
    return (
        <ul>
            {
                users.map(u => <img key={u.id} alt="aik" src={u.avatar}></img>)
            }
            <div>labas</div>

        </ul>
    )
}

export default Avatar;

//Atvaizduoti userių avatarus DONE!


/*
            {
                users.map(u => <li key={u.id}>{u.name} <i>{u.company.name}<div style={{color:'pink'}}>{u.email}{u.phone}</div></i></li>)
            }*/