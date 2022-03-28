import { Component } from "react";
class Rand extends Component{
    constructor(props) {
        super();
        // this.valio = this.valio.bind(this);
        this.state = {color: 'blue'}; // pradines steito reiksmes
        this.state = {borderRadius: '0%'};
        this.state = {width: '100px'};
        this.state = {height: '100px'};
        //this.handleClick = this.handleClick.bind(this);
        this.state = { random: 0 };
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
                width: '200px',
                height: '100px'
              });
        } else {
        this.setState({
            borderRadius: '50%',
            width: '100px',
            height: '100px'

          });
        }
       // setTimeout(() => console.log(this.state.color), 1); //per kiek laiko consoleje atspauzdina spalvos pavadinima
    }
    /*
    handleClick() {
        const min =  1;
        const max = 10;
        const rand = min + Math.floor(Math.random() * (max - min) + 1);
        this.setState({ random: this.state.random + rand });
    }*/
    rand = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    render() {
        return(
        <>
            <div style={{
                width: this.state.width,
                height: this.state.height,
                borderRadius: this.state.borderRadius,
                background: this.state.color,
                
            }}><h1>{this.rand(5, 25)}</h1>
            </div>
            
            <button onClick={this.valio}>change</button>
            <button onClick={this.rand}>random</button>
            
        </>
        )
    }
}
export default Rand;
//<button onClick={this.state.random}>random</button>
/*
2.Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su 
random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį 
kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25
*/