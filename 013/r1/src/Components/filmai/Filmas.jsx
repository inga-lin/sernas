
function Filmas({users}){


    return (


                <div className="dataItem2">
                <li className="dataItem">
                   <h3>{users.title} </h3>
                   <p>{users.vote_average} Reating, {users.release_date.substring(0,4)}</p>
                </li>
                </div>
                );
      
         
            
        
}

export default Filmas;


/*
    return (
        <div className="dataItem2">
            {filmas.length>0? filmas.sort((a,b)=>b.vote_count - a.vote_count ).slice(0, 8).map((e,i)=> filmas.length>0 ? 
        <li className="dataItem" key={i}onClick={()=>poster(e.id)} > 
           <h3>{filmas.title} </h3>
           <p>{filmas.vote_average} Reating, {filmas.release_date.substring(0,4)}</p>
        </li>:''):''}
        </div>
        )
*/
