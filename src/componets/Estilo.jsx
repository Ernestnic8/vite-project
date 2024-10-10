import "./Estilo.css"
import "./Estilo.scss"
import moduleStyles from "./Estilos.module.css"

export default function Estilos(){
    let myStyles ={
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%"
    }
    return(
        <section className="estilos">
            <h2>Estilos CSS en React.JS</h2>
            <h3 className="bg-react">Estilos en Hoja CSS externa</h3>
            <h3 className="bg-react" style={{borderRadius:".25rem", margin:"1rem"}}>Estilos en Linea (atributo style)</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en Hoja CSS externa</h3>
            <h3 className="bg-react">Agregando Normalize con<hr/>
            <code>@import-normalize</code> </h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.sucess}>Estilos con modulos</h3>
            <h3 className="bg-sass">Estilos con Sass</h3>
        </section>
    )
}