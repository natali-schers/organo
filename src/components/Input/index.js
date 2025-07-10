import './style.css';

const Input = (props) => {
    return (
        <div className={`form-input ${props.type}`} >
            <label>{props.label}</label>
            <input onChange={(e) => props.onInputChange(e.target.value)} placeholder={props.placeholder} type={props.type} required={props.required} value={props.value}/>
        </div>
    )
}

export default Input;