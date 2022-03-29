// Lifecycle metodas
/*import {Component} from "react";
// cia nebe funkcija o klase naudojam
class Kv2 extends Component{
    

    contructor(props) {
        super();
        console.log("konstruktorius");
    }
    

    //naudojamas startiniam paleidinui//galima paleist laikrodi//jo vidu irasom ka norim kas atsitiktu kai ji paleidziam
    componentDidMount() {
        console.log('pasileido');
    }
  
    componentWillUnmount() {
    }
    render(){
        return(
            <div>
                {
                this.props.elements.map((e, i) => <h1 key={i} style={{color:'#'+e}}>kv</h1>)
                }
            </div>
        )
    }
}

export default Kv2;*/

function Kv2({elements}){
    return(
        <div>
            {elements.map((e, i) => <h1 key={i} style={{color:'#'+e}}>kv</h1>)}
        </div>
    )
}
export default Kv2;