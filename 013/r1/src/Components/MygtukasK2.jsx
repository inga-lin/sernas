
function MygtukasK2({kvadratas}){

    return(

        <>
           {kvadratas.map( (kvadratas, i)  => <div  className="BS" key={i}>{kvadratas}</div>)}
            
        </>
    )

        
    
}
export default MygtukasK2;