/*function Dogs1({elements, dogs }){
    return(
        <div>
            {elements.map((e, i) => <h1 key={i} style={{color:'#'+e}} >{elements={dogs}}</h1>)}
        </div>
    )
}
export default Dogs1;*/

function Dogs1({dogs}) {
    
    return (
       
        <div>
            {
                dogs.sort((a,b) => (a < b ? -1 : 1)).map(dogs => <h1 style={{backgroundColor: 'pink', color:'white', height: '100px', width:"100px",borderRadius:'50%', padding:'100px'}}>{dogs}</h1>)
            }   
            
        </div>

    )

}
export default Dogs1;

//dogs.sort((a,b) => b - a) neveikia