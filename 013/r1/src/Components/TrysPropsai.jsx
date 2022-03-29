export default function TrysPropsai({color, vardas, tekstas}) {
   
    return (
        <div>
            <h1 style={{color:color}}>{vardas} </h1>  
            <h2 style={{color:color}}>{tekstas} </h2>     
        </div>

    )

}

/*5.Sukurti komponentą, kuris gauna tris props. 
Vienas props bet koks tekstas, kuris komponente 
atvaizduojamas h1 tage, o antras bet koks tekstas kuris 
atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.*/