import { useFetch } from "../Hooks/useFetch"

export default function HooksPersonalizado(){
    let url="https://pokeapi.co/api/v2/pokemon/"

    let {data, isPending, error} = useFetch(url)

    return(
        <>
        <h2>Hooks Personalizados</h2>
        <h3>{JSON.stringify(isPending)}</h3>
        <h3>{JSON.stringify(error)}</h3>
        <h3>{JSON.stringify(data)}</h3>
        </>
    )
}