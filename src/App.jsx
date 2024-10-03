import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compnt from './componets/component'

function App() {
  const [count, setCount] = useState(0)
  let estaciones = ["Primavera", "verano", "Otoño", "invierno"]

  return (
    <>
      <section>
        <Compnt msg="I am a component"></Compnt>
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
    </>
  )
}

export default App
