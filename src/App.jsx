import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './componets/Component'
import Propiedad from './componets/Propiedad'
import Estado from './componets/Estado'
import RenderizadoCondicional from './componets/RederizadoCondicional'
import RederizadoElementos from './componets/RedenrizadoElementos'
import {EventosES7, Eventos, MasEvents} from './componets/Eventos'

function App() {
  const [count, setCount] = useState(0)
  let estaciones = ["Primavera", "verano", "Otoño", "invierno"]

  return (
    <>
      <section>
        <Component msg="I am a Night Knife" />
      </section>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          LOL
        </p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR Sleep
        </p>
      </div>
      <p className="read-the-docs">
        Click en el Vite and React logos to learn more
      </p>
      <ul>
        {estaciones.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <section>
        <Propiedad 
        cad= "Intento" 
        numero={2} 
        boole={false}
        cadena = {[9 , 8, 7]}
        object ={{nombre: "Juan", correo:"juan@gmail.com"}}
        elementoReact={<i>Elemento react</i>}
        funcion={(num) => num*num}
        componenteReact = {<Component msg="Nuevo componente en props" />}
        />
        <hr/>
        <Estado/> 
        <hr/>
        <RenderizadoCondicional/>     
        <hr/>
        <RederizadoElementos/>
        <hr/>
        <Eventos/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasEvents/>
      </section>
    </>
  )
}

export default App
