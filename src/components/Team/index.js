import "./style.css";
import Employee from "../Employee";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
    return (
        (props.employees.length > 0) &&
        <section className="team" style={{backgroundColor: hexToRgba(props.primaryColor, 0.6)}}>
            <input onChange={e => props.onChangeTeamColor(e.target.value, props.id)} value={props.primaryColor} type="color" className="input-color" />
            <h3>{props.name}</h3>
            <hr style={{borderColor: props.primaryColor}}/>
            <div className="employees">
                {props.employees.map(employee => {
                    return <Employee name={employee.name} backgroundColor={props.primaryColor} key={employee.name} role={employee.role} image={employee.image} onDelete={props.onDelete}/>;
                })}
            </div>
        </section>
    )
}

export default Team;