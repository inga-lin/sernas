import BS from './BS'
function MygtukasK2({kvadratas}){

    return(

        <>
           {kvadratas.map( (kvadratas, i)  => <BS  key={i} sk={i}></BS>)}
            
        </>
    )

        
    
}
export default MygtukasK2;