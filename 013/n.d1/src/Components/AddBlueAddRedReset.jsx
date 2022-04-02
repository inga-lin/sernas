import { Component } from "react";
class AddBlueAddRedReset extends Component{
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

    kvadratas2 = () => {
        const kvadratusDesimCia = [...this.state.kvadratass]; //dedam i masyva visus kvadratus
        
        kvadratusDesimCia.push(
            <div style={{
                width: '50px',
                height: '50px',
                background: 'red',
            }}></div>);
                
        this.setState ({kvadratass: kvadratusDesimCia});
       
       
    }

    reset = () => {
        this.setState({
            kvadratass: []
        });
    }


    render() {
        return(
        <>
            <div style={{ display: 'flex', gap: '20px', marrgin: '20px'}}> {this.state.kvadratass}</div>
            <button onClick={this.kvadratas}>Add blue</button>
            <button onClick={this.kvadratas2}>Add red</button>
            <button onClick={this.reset}>Reset</button>

        </>
        )
    }
}
export default AddBlueAddRedReset;


