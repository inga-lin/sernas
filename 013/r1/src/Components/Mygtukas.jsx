
function Mygtukas({add, addKv}){

    return(

        <>
           <button onClick={add}>Add</button>{/*1 pasidarommygtuka*/} 
           <button onClick={addKv}>ADD Kvadratukas</button>
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