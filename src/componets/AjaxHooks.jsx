import { useState, useEffect} from "react";

function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {

    //const [pokemons, setPokemon] = useState([]);

    // useEffect(() =>{
    //     let offset = 630; // Puedes cambiar este valor para obtener otros Pokémon
    //     let limit = 30;  // Cambia este valor para la cantidad de Pokémon que deseas
    //     let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then((json) => {
    //             json.results.forEach((el)=>{
    //                 fetch(el.url)
    //                 .then((res) => res.json())
    //                 .then((json) => {
    //                     let pokemon ={
    //                         id:json.id,
    //                         name:json.name,
    //                         avatar: json.sprites.front_default,
    //                     };
                        
    //                     setPokemon((pokemons)=> [...pokemons, pokemon]);
    //                 });
    //             })
                
                
    //         })
    //         .catch(error => console.error('Error fetching Pokémon:', error));
    // }, [])

    const [pokemons, setPokemons] = useState([]);

    // useEffect(() => {
    //     // Cambia el offset y limit para obtener diferentes Pokémon
    //     const offset = 650; // Cambia este valor para obtener otros Pokémon
    //     const limit = 20;  // Cambia este valor para la cantidad de Pokémon que deseas
    //     const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        
    //     fetch(url)
    //         .then(res => res.json())
    //         .then((json) => {
    //             const fetchPromises = json.results.map(el => {
    //                 return fetch(el.url)
    //                     .then(res => res.json())
    //                     .then(json => {
    //                         return {
    //                             id: json.id,
    //                             name: json.name,
    //                             avatar: json.sprites.front_default,
    //                         };
    //                     });
    //             });

    //             // Esperamos a que todas las promesas se resuelvan
    //             Promise.all(fetchPromises).then(pokemons => {
    //                 setPokemons(pokemons);
    //             });
    //         })
    //         .catch(error => console.error('Error fetching Pokémon:', error));
    // }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

    useEffect(()=>{
        const getPokemon= async (url)=>{
            let res = await fetch(url),
            json = await res.json()

            json.results.forEach(async (el) =>
            {
                let res =await fetch(el.url)
                json = await res.json()

                let pokemon ={
                    id:json.id,
                    name:json.name,
                    avatar: json.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon])
            })
            
        }

        getPokemon("https://pokeapi.co/api/v2/pokemon/")
    }, [])


    return (
        <>
            <h2>AJAX con APIs en HOOKS</h2>
            {pokemons.length === 0 ? (<h3>Cargando...</h3>) :
                (
                    pokemons.map((el) =>
                        (<Pokemon key={el.id} name={el.name} avatar={el.avatar} />))
                )}
        </>
    );
}

