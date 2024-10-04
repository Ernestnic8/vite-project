import { Component } from "react"

export class EventosES7 extends Component{
    
        state = {
            contador:0
        };
    

    suma =(e) =>{
        this.setState({
            contador: this.state.contador+1,
        });
    }

    resta=(e)=>{
        this.setState({
            contador:this.state.contador -1
        });
    }

    render(){
        return(
            <div>
                <h2>Componente de clase ES7</h2>
                <nav>
                    <button onClick={this.suma}>+</button>
                    <button onClick={this.resta}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>                
            </div>
        );
    }
}

export class Eventos extends Component{

    constructor(props) {
        super(props);
        this.state = {
            contador:0
        };

        this.suma = this.suma.bind(this)
        this.resta= this.resta.bind(this)
    }

    suma(e){
        this.setState({
            contador: this.state.contador+1,
        });
    }

    resta(){
        this.setState({
            contador:this.state.contador -1
        });
    }

    render(){
        return(
            <div>
                <h2>Componente de clase ES6</h2>
                <nav>
                    <button onClick={this.suma}>+</button>
                    <button onClick={this.resta}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>                
            </div>
        );
    }
}