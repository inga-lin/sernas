export default function Zebrai({big}) {
   
    return (
        <div>
            <h1 style={{ color: big === '1' ? 'blue' : 'red'}}>Zebrai ir bebrai</h1> 
            <h1 style={{ color: big !== '1' ? 'blue' : 'red'}}>Zebrai ir bebrai</h1>   
        </div>

    )

}

/*
 3.Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”,
 kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus
  1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.
*/