
function Mygtukas({add}){

    return(

        <>
           <button onClick={add}>Add</button>{/*1 pasidarommygtuka*/} 
        </>
    )

        
    
}
export default Mygtukas;

//.1reikia mygtuko, kurį paspaudus skaičius padidėja 1 DONE!

/*
        <>
           <button onClick={add}>Add</button>
           {skaicius.map( (k, i)  => <div  key={i}>{k}</div>)}
           
           
        </>
*/