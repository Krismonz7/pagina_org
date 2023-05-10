import './Equipo.css';
import {Colaborador} from '../Colaborador/Colaborador';
import { useState } from 'react';
import hexToRgba from 'hex-to-rgba';


const Equipo = ({equipoCompleto,listaColaboradores}) => {

  
  const {titulo,colorPrimario,colorSecundario} = equipoCompleto;
  const [colorTarget,setColorTarget] = useState(colorPrimario);
  const [colorFondo,setColorFondo]= useState(colorSecundario);

  return ( 
    <section className='equipo' style={{background: hexToRgba(colorFondo,0.75)}}>


<div className="input-color">
      <input 
      type='color'
      value={colorTarget}
      onChange={(evento)=>{

        const color = evento.target.value;
        setColorTarget(color);
        setColorFondo(color);

      }}
      />
</div>


        <h3
        style={{borderColor: colorPrimario}}
        > {titulo}</h3>
        <div className='colaboradores'>          

          {
            listaColaboradores.map((colaborador,index)=>(
              <Colaborador 
              colaborador={colaborador} 
              key={index} 
              colorPrimario={colorTarget}
              />

            ))
          }
        
        </div>

        

    </section>
  )
}



export default Equipo;