import './style.css';

const Employee = (props) => {
    return (
        <div className='employee'>
            <div className='header' style={{backgroundColor: props.backgroundColor}}>
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className='body'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>

    )
}

export default Employee;