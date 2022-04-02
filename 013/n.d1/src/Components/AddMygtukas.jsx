import { Component } from "react";
class AddMygtukas extends Component{
    constructor(props) {
        super();
        this.state = { kvadratass: []};
    }

    kvadratas = () => {
        const kvadratusDesimCia = [...this.state.kvadratass]; //dedam i masyva visus kvadratus
        
        kvadratusDesimCia.push(
            <div style={{
                width: '50px',
                height: '50px',
                background: 'blue',
            }}></div>);
                
        this.setState ({kvadratass: kvadratusDesimCia});
       
       
    }


    render() {
        return(
        <>
            <div style={{ display: 'flex', gap: '20px', marrgin: '20px'}}> {this.state.kvadratass}</div>
            <button onClick={this.kvadratas}>Add</button>
        
        </>
        )
    }
}
export default AddMygtukas;


/*
Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną 
kartą atsiranda mėlynas kvadratas, paspaudus du - du kvadratai ir t.t.
*/