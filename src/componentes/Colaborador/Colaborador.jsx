
import "./Colaborador.css";
import { AiFillCloseCircle } from 'react-icons/ai';


export const Colaborador = ({colaborador,colorPrimario,eliminarColaborador}) => {

  if(colaborador){

    const {id,nombre,puesto,foto,equipo}=colaborador;

    return (
      <div className="colaborador">
        <div className="eliminar">
        <AiFillCloseCircle onClick={(event)=>{
          if(event){
            eliminarColaborador(id,nombre);
          }
        }}/>
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
