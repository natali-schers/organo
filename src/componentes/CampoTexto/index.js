import './CampoTexto.css'

// Arrow function
const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
            {/* <input placeholder={`${props.placeholder}...`} /> */}
        </div>
    )
}

export default CampoTexto;