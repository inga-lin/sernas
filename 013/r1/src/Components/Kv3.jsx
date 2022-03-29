import {Component} from "react"
Class Kv3 extends Component{
    

    contructor(props){
        super();
        console.log("konstruktorius");
    }
    

    //naudojamas startiniam paleidinui//galima paleist laikrodi
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }
    return(
        <div>
            {this.props.elements.map((e, i) => <h1 key={i} style={{color:'#'+e}}>kv</h1>)}
        </div>
    )
}

export default Kv3;