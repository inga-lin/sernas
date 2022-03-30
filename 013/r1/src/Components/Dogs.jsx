/*import { Component } from "react";
import Dogs1 from "./Dogs1";

class Dogs extends Component{

    constructor(props) {
        super();
        this.state = {elements:[]};
        
    }

    add = () => {
        const elementsCopy = [...this.state.elements];
        elementsCopy.push(Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0'));
        this.setState({
            elements: elementsCopy
          });
    }

    reset = () => {
            this.setState({
            elements: []
          });
    }

    render(){
        return (
            <>
            <button onClick={this.add}>ADD</button>
            <button onClick={this.reset}>Reset</button>
            <Dogs1 elements={this.state.elements}/>
            </>
        )
    }

}

export default Dogs;*/
//import Dogs1 from "./Dogs1"
function Dogs({dogs}) {
    
    return (
        <div>
            {
                
                dogs.map(dogs => <h1 style={{backgroundColor: 'red', height: '150px', width:"150px"}}>{dogs}</h1>)
            }   
        </div>

    )

}
export default Dogs;

//Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.