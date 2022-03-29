import { Component } from "react";
//i class componenta (apskritimas) isidedam seita (Components)
class Apskritimas extends Component{
    //cia sukuriam constrruktoriu
    constructor(props){
        super();
        this.state = {color: 'blue'};//vidinis komponento reikalas//cia yra pradine steito reiksme
        this.state = {size: '150px'}
    }

    valioo(){ //valioo metodas
        console.log('jeee');
        //pakeisim steita//this.state.color NEGALIMA
        this.setState({
            color: 'red',
            size: '100px'
        });
        console.log(this.state.color);//nuskaitom spalva
    }

    buu(){
        this.setState({
            color: 'pink',
            size: '100px'
        });
    }
    //render() yra speciali funkcija kuria jis issikviecia kada reikia jam(mum nieko daryt nereik)
    render(){
        return(
            <>
                <div style={{width: this.props.size, 
                    height: this.state.size, 
                    borderRadius: '50%', 
                    background: this.state.color}}> {/*cia panaudojam ta steita ir tada app.jsx nebereik color="pink" kur rasem prie size*/}
                
                </div>
                <button onClick={() => this.valioo()} >Valio</button>
                <button onClick={() => this.buu()} >Valio</button>
            </>
        )
        
    }

}

export default Apskritimas;