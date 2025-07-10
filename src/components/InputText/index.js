import './style.css';

const InputText = (props) => {
    return (
        <div className='form-input'>
            <label>{props.label}</label>
            <input onChange={(e) => props.onInputChange(e.target.value)} placeholder={props.placeholder} type='text' required={props.required} value={props.value}/>
        </div>
    )
}

export default InputText;