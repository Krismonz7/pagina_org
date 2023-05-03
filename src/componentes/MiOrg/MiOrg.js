import './MiOrg.css';
const MiOrg = ({cambiarMostrar}) => {

  return (
    <div className='orgSection'>

        <h3 className='title'>
            mi equipo
        </h3>
        <img src='/img/add.png' alt='add' onClick={cambiarMostrar}/>

    </div>
  )
}


export default MiOrg;