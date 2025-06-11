import './style.css';

const Dropdown = (props) => {
    return (
        <div className='form-dropdown'>
            <label>{props.label}</label>
            <select onChange={e => props.onSave(e.target.value)} value={props.value} required={props.required}>
                <option value="">Selecione um time</option>
                {props.items.map(item => {return <option key={item} value={item}>{item}</option>})}
            </select>
        </div>
    )
}

export default Dropdown;