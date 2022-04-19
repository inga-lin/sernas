import { useParams } from "react-router-dom";

import { data } from "../App";

function Edit () {
    //patams yra objektas kuriame yra id
    const params = useParams();

    const {id} = useParams();
    console.log(params, id);

    return (
        <> 
        

        {
            data.map(a => parseInt(id) === a.id ? <h2 style={{color:'white', backgroundColor:'crimson'}}>{a.n}</h2> : null)
        }
        </>
    )
}
export default Edit