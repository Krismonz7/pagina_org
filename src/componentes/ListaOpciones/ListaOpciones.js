import "./ListaOpciones.css"

const ListaOpciones = (props) => {


    const {equipos}= props;
    const manejarCambio=(e)=>{
        const valorTargeta= e.target.value;
        props.actualizarEquipo(valorTargeta);
    }


    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>

            <option value='' disabled defaultValue='' hidden>Seleccionar equip</option>
            {
                equipos.map((equipo,index)=>{

                    return (
                        <option key={index} >
                            {equipo}
                        </option>
                    )

                })
            }
        </select>
    </div>
}

export default ListaOpciones