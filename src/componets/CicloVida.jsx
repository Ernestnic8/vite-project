import { Component } from "react";

class Reloj extends Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        console.log(3, "Ha sido removido");
    }


    render(){
        return(
            <h3>{this.props.hora}</h3>
        )
    }
}


export class CicloVida extends Component{
    constructor(props){
        super(props);

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible:false,
        }

        this.temporizador = null;

    }

    tictac =() =>{
        this.temporizador = setInterval(() => {
            this.setState({
                hora:new Date().toLocaleTimeString(),
            })
        },1000)
    }

    iniciar = () =>{
        this.tictac();
        this.setState({
            visible:true,
        })
    }

    detener = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible:false,
        })
    }

    render(){
        return(
            <>
            <h2>Ciclo de vida</h2>
            {this.state.visible && <Reloj hora={this.state.hora}/>}
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}