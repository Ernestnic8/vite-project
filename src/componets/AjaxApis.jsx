import { Component } from 'react';
import PropTypes from 'prop-types';

function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

// Parámetros por defecto
Pokemon.defaultProps = {
    avatar: 'url_por_defecto',
    name: 'Nombre por defecto',
};

export default class AjaxApis extends Component {
    state = {
        pokemons: [],
    }

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                const fetchPromises = json.results.map(el => {
                    return fetch(el.url)
                        .then(res => res.json())
                        .then(json => {
                            console.log(json);
                            return {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            };
                        });
                });

                // Esperamos a que todas las promesas se resuelvan
                Promise.all(fetchPromises).then(pokemons => {
                    this.setState({ pokemons });
                });
            })
            .catch(error => console.error('Error fetching Pokémon:', error));
    }

    render() {
        return (
            <>
                <h2>AJAX con APIs</h2>
                {this.state.pokemons.length === 0 ? (<h3>Cargando...</h3>) :
                    (
                        this.state.pokemons.map((el) =>
                            (<Pokemon key={el.id} name={el.name} avatar={el.avatar} />))
                    )}
            </>
        );
    }
}

Pokemon.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};