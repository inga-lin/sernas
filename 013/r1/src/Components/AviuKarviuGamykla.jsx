import { useEffect, useState } from "react";
import rand from '../Common/rand';


function AviuKarviuGamykla() {
    const [karves, setKarves] = useState([]);//pradzioje rasys non kuris yra pradinis title
    const [avys, setAvys] = useState([]);

    const changeKarves = () => {
        setKarves(items => [...items, items.length + rand(1000000, 9999999)]);
    }
  
    const add1 = () => {
        setAvys(items => [...items, items.length + rand(1000000, 9999999)]);
    }

    useEffect(()=>{ //per juos issisaugojam localStorage//nepamirst virsuje parasyti import { useEffect, useState } from "react"; kitaip neveiks
        const lentyna = localStorage.getItem('lentyna1')
        if(lentyna){
            setAvys(JSON.parse(lentyna))
     }
},[])
    
    useEffect(()=>{
        localStorage.setItem('lentyna1',JSON.stringify(avys))
    })

    useEffect(()=>{ //per juos issisaugojam localStorage//nepamirst virsuje parasyti import { useEffect, useState } from "react"; kitaip neveiks
        const lentyna = localStorage.getItem('lentyna2')
        if(lentyna){
            setKarves(JSON.parse(lentyna))
     }
},[])
    
    useEffect(()=>{
        localStorage.setItem('lentyna2',JSON.stringify(karves))
    })
    

    return(

        <>
           <button onClick={changeKarves} >į ganyklą</button>
           <button onClick={add1} >į ganyklą</button>
           {karves.map( (k, i)  => <div  style={{width: '50px',height: '50px',margin: '40px', padding: '50px' ,background: 'green'}} key={i}>{k}</div>)}
           {avys.map( (k, i)  => <div  style={{width: '50px',height: '50px',margin: '40px', padding: '50px' ,background: 'red', borderRadius: '50%'}} key={i}>{k}</div>)}
           
           
        </>
    )

        
    
}
export default AviuKarviuGamykla;