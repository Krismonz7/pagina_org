import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placheolder}...`;
    const HandleChangeValor=(e)=>{
        const valorTargeta= e.target.value;
        props.actualizarValor(valorTargeta);
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>

        <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={HandleChangeValor}
        />
    </div>
}

export default CampoTexto