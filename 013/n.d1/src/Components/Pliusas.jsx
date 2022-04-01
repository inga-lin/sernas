import { Component } from "react";
class Pliusas extends Component{
    constructor(props) {
        super();
        this.state = { skaicius: 0 };
    }

    skaicius = () => {
        this.setState({
            skaicius: this.state.skaicius + 1,
          });
    }
    skaiciusMinus = () => {
        this.setState({
            skaicius: this.state.skaicius - 3,
          });
    }

    render() {
        return(
        <>
            <h1>{this.state.skaicius}</h1>
            <button onClick={this.skaicius}>+</button>
            <button onClick={this.skaiciusMinus}>-</button>
            
        </>
        )
    }
}
export default Pliusas;

/*
Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja
 skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus 
 minus- sumažėja 3
*/