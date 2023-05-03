import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton"
import { useState } from "react"
 
const Formulario = (props) => {

    //Desestructura de props
    const {equipos, registrarColaborador} = props;


    const [nombre,setNombre] = useState(' ');
    const [foto,setFoto] = useState(' ');
    const [puesto,setPuesto] = useState(' ');
    const [equipo,actualizarEquipo] = useState(' ');

    const manejarEnvio =(e)=>{

        e.preventDefault();

        console.log('Manejar envio');

        let datosEnviar = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        };
        registrarColaborador(datosEnviar);
        
    }

    

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={setNombre}
            />


            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={setPuesto}
            />


            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={setFoto}
            />
            <ListaOpciones
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario