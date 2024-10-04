import PropTypes from 'prop-types';

export default function Propiedad(props) {
    // const {var} = props;

    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cad}</li>
                <li>{props.numero}</li>
                <li>{props.boole ? "Verdadero": "Falso"}</li>
                <li>{props.cadena.join(", ")}</li>
                <li>{props.object.nombre + " - " + props.object.correo}</li>
                <li>{props.elementoReact}</li>
                <li>{props.cadena.map(props.funcion).join(", ")}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

Propiedad.defaultProps = {
    porDefecto : "Las props"
};

Propiedad.PropTypes = {
    cad : PropTypes.string.isRequired,
    numero :PropTypes.number.isRequired,
    boole : PropTypes.bool.isRequired
};