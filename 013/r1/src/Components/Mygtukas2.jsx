import BS from './BS'; //kvadrato forma
import rand from '../Common/rand'; //rand formule

function Mygtukas2({sk, kv}){

    return(

        <>
           
           <h2>{sk}</h2>{/*1 cia idedam skaiciu*/}
           {
            kv.map((k, i) => <BS key={i} sk={i} rand={rand(1, 1000)}></BS>)
            }
           
        </>
    )

        
    
}
export default Mygtukas2;