import { useState } from "react";

export default function Formularios()
{
    const  [form, setForm] = useState({})

    const handleChange=(e)=> {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("El formulario fue enviado")
    }
    return(
        <>
        <h2>Formularios</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name={form.name} value="nombre
            " onChange={handleChange}/>

            <p>Elije tu sabor de JS Favorito</p>
            <input type="radio" id="vainilla" name="sabor" value="vainilla" onChange={handleChange}><label htmlFor="vainilla">Vainilla</label></input>
            <input type="radio" id="react" name="sabor" value="react" onChange={handleChange}><label htmlFor="react">React</label></input>
            <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange}><label htmlFor="angular">Angular</label></input>
            <input type="radio" id="vue" name="sabor" value="vue" onChange={handleChange}><label htmlFor="vue">Vue</label></input>
            <input type="radio" id="svuelt" name="sabor" value="svelte" onChange={handleChange}><label htmlFor="svuelte">Svuelte</label></input>

            <p>Elije tu lenguaje de programación favorito</p>
            <select name="lenguaje" onChange={handleChange} defaultValue="">
                <option value="">---</option>
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">GO</option>
                <option value="rb">Rubi</option>
            </select>

            <br/>
            <label htmlFor="terminos">Acepto terminos y condiciones</label>
            <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}></input>

            <br/>
            <input type="submit" />
        </form>
        </>
    )
}