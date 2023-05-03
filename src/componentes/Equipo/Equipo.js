import './Equipo.css';
import {Colaborador} from '../Colaborador/Colaborador';

const Equipo = ({equipoCompleto,listaColaboradores}) => {

  const {titulo,colorPrimario,colorSecundario} = equipoCompleto;

  return ( 

    <section className='equipo' style={{background: colorSecundario}}>

        <h3
        style={{borderColor: colorPrimario}}
        > {titulo}</h3>
        <div className='colaboradores'>          

          {
            listaColaboradores.map((colaborador,index)=>(

              <Colaborador 
              colaborador={colaborador} 
              key={index} 
              colorPrimario={colorPrimario}
              />

            ))
          }
        
        </div>

        

    </section>
  )
}



export default Equipo;