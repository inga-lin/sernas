import { useEffect, useState } from "react";
import axios from 'axios';
function Users(){


    const [users, setUsers] = useState([]);
    

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data);
            setUsers(res.data);
        })
    },[]);
  
    return (
        <ul>
            {
                users.map(u => <li key={u.id}>{u.name} <i>{u.company.name}</i></li>)
            }
        </ul>
    )
}

export default Users;