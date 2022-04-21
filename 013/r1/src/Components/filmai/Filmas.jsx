
function Filmas({filmas}){


  
    return (
        <ul>
            
            {
               filmas.map(u => <li src={filmas.budget}></li>)
            }
            

        </ul>
    )
}

export default Filmas;