import { Component } from "react";
import data from '../helpers/data.json'

function ElementoLista (props){
    return(
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    )
}

export default class RederizadoElementos extends Component {

    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }

    render() {
        return(
            <div>
                <h2>Elementos Render</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {this.state.seasons.map((el) => (
                        <li key={el}>{el}</li>
                    ))}
                </ol>
                <h3>Frameworks Fronted JavaScript</h3>
                <ul>
                    {data.frameworks.map((el) => (
                        <ElementoLista key={el.id} el = {el}/>
                    ))}
                </ul>
            </div>
        )
    }
}