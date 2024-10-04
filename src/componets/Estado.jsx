import { Component } from "react";

function EstadoA(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador : 0
        }

        //  setInterval(() => {
        //      this.setState({
        //          contador: this.state.contador + 1
        //      });
        //  }, 1500);
    }
    render(){
        return (
         <div>
            <h2>Staste</h2>
            <p>{this.state.contador}</p>
            <EstadoA contadorHijo={this.state.contador}/>
         </div>
        );
    }
}