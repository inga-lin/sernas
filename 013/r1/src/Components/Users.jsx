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
            {
                users.map(u => <li key={u.id}>{u.name} <i>{u.company.name}<div style={{color:'pink'}}>{u.email}{u.phone}</div></i></li>)
            }
        </ul>
    )
}

export default Users;
/*
    "id": 1,                      {u.id}
    "name": "Leanne Graham",      {u.name}
    "username": "Bret",           {u.username}
    "email": "Sincere@april.biz", {u.email}
    "address": {                   -------------
      "street": "Kulas Light",    {u.address.street}
      "suite": "Apt. 556",        {u.address.suite}
      "city": "Gwenborough",       {u.address.city}
      "zipcode": "92998-3874",     {u.address.zipcode}
      "geo": {                    -------------
        "lat": "-37.3159",          {u.address.geo.lat}
        "lng": "81.1496"           {u.address.geo.lng}
      }
    },
    "phone": "1-770-736-8031 x56442",      {u.phone}
    "website": "hildegard.org",            {u.website}
    "company": {                           -------------
      "name": "Romaguera-Crona",                                 {u.company.name}
      "catchPhrase": "Multi-layered client-server neural-net",    {u.company.catchPhrase}
      "bs": "harness real-time e-markets"                         {u.company.bs}
    }
  },

*/