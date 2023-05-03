import "./Colaborador.css";



export const Colaborador = ({colaborador,colorPrimario}) => {


  if(colaborador){
    const {nombre,puesto,foto,equipo}=colaborador;
  
    return (
      <div className="colaborador">
        <div className="encabezado" style={{background: colorPrimario}}>
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
