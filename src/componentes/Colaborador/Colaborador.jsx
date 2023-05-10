
import "./Colaborador.css";
import { AiFillCloseCircle } from 'react-icons/ai';


export const Colaborador = ({colaborador,colorPrimario}) => {

  if(colaborador){


    const {id,nombre,puesto,foto,equipo}=colaborador;

    console.log('nombre: ',nombre,' id: ',id)


    return (
      <div className="colaborador">
        <div className="eliminar">
        <AiFillCloseCircle/>
        </div>
        <div className="encabezado" style={{background:colorPrimario}}>
          <img src={foto} alt={nombre}/>
        </div>
  
        <div className="info" >
        {equipo}
          <h4>{nombre}</h4>
          <h5>{puesto}</h5>
        </div>
      </div>
    )
  }else{
    return(
      <></>
    )
  }
}
