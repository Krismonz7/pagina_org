import { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import { Footer } from './componentes/Footer/Footer';

function App() {
  const colaboradoresIniciales=[{
    id:uuid(),
    nombre:'kirby',
    puesto:'jefe',
    foto:'https://e7.pngegg.com/pngimages/989/693/png-clipart-kirby-battle-royale-kirby-star-allies-kirby-s-dream-land-kirby-s-adventure-kirby-game-nintendo.png',
    equipo:'Programacion'
  }
  ,
  {
    id:uuid(),
    nombre:'Link',
    puesto:'Desarrollador',
    foto:'https://cdnx.jumpseller.com/retriever-inc/image/6526015/resize/1200/1200?1675961091',
    equipo:'Data Science'
  }
  ,{
    id:uuid(),
    nombre:'meta knight',
    puesto:'Soporte',
    foto:'https://www.smashbros.com/assets_v2/img/fighter/meta_knight/main.png',
    equipo:'Ux y diseño'

  }
];
  
  
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores,actualizarColaboradores] = useState(([...colaboradoresIniciales]));
  //Lista de equipos
  const [equipos,actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo:'Programacion',
      colorPrimario:'#57C278',
      colorSecundario:'#D9F7E9'
    },
    {
      id:uuid(),
      titulo:'Front End',
      colorPrimario:'#82CFFA',
      colorSecundario:'#E8F8FF'
    },
    {
      id:uuid(),
      titulo:'Data Science',
      colorPrimario:'#A6D157',
      colorSecundario:'#F0F8E2'
    },
    {
      id:uuid(),
      titulo:'DevOps',
      colorPrimario:'#E06B69',
      colorSecundario:'#FDE7E8'
    },
    {
      id:uuid(),
      titulo:'Ux y diseño',
      colorPrimario:'#DB6EBF',
      colorSecundario:'#FAE9F5'
    },
    {
      id:uuid(),
      titulo:'Movil',
      colorPrimario:'#FFBA05',
      colorSecundario:'#FFF5D9'
    },
    {
      id:uuid(),
      titulo:'Innovacion y Gestion',
      colorPrimario:'#FF8A29',
      colorSecundario:'#FFEEDF'
    }
  ])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log('Nuevo colaborador',colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores,colaborador]);
  }






  //Eliminar colaborador

  const eliminarColaborador=(idcolaborador,nombre)=>{
    console.log('Eliminar id: '+idcolaborador+' colaborador: '+nombre);
    const nuevosColaboradores= colaboradores.filter((colaborador)=>{
      return colaborador.id !== idcolaborador
    });
    actualizarColaboradores(nuevosColaboradores);
  }
  return (
    <div>
      <Header />
      { 

      mostrarFormulario && <Formulario 
      equipos={equipos.map((equipos)=>equipos.titulo)}
      registrarColaborador={registrarColaborador}
      />
      } 

      <MiOrg cambiarMostrar={cambiarMostrar}/>


      {
        equipos.map((equipo)=>{
          return(
            <Equipo 
            equipoCompleto={equipo} 
            listaColaboradores={colaboradores.map((colaborador)=>{
              return((colaborador.equipo === equipo.titulo) ? colaborador : null)
            }
            )}
            eliminarColaborador={eliminarColaborador}
            key={equipo.titulo}/>
          ) 
        })
      }

      <Footer/>

    </div>
  );
}

export default App;
