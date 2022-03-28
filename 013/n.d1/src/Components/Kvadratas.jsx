import { Component } from "react";
class Kvadratas extends Component{
    constructor(props) {
        super();
        // this.valio = this.valio.bind(this);
        this.state = {color: 'blue'}; // pradines steito reiksmes
        this.state = {borderRadius: '0%'};
        this.state = {width: '100px'};
        this.state = {height: '100px'}
    }

    valio = () => {
        // this.state.color = 'red'; BLOGAI
        if(this.state.color === 'red') {
            this.setState({
                color: 'blue'
              });
        } else {
        this.setState({
            color: 'red'
          });
        }
        if(this.state.borderRadius === '50%') {
            this.setState({
                borderRadius: '0%',
                width: '100px'
              });
        } else {
        this.setState({
            borderRadius: '50%',
            width: '100px'

          });
        }
       // setTimeout(() => console.log(this.state.color), 1); //per kiek laiko consoleje atspauzdina spalvos pavadinima
    }

    render() {
        return(
        <>
            <div style={{
                width: this.state.width,
                height: this.state.height,
                borderRadius: this.state.borderRadius,
                background: this.state.color
            }}>
            </div>
            <button onClick={this.valio}>Paspausk</button>
        </>
        )
    }
}
export default Kvadratas;