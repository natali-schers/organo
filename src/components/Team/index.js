import "./style.css";
import Employee from "../Employee";

const Team = (props) => {
    return (
        (props.employees.length > 0) &&
        <section className="team" style={{backgroundColor: props.secondaryColor}}>
            <h3>{props.name}</h3>
            <hr style={{borderColor: props.primaryColor}}/>
            <div className="employees">
                {props.employees.map(employee => <Employee name={employee.name} backgroundColor={props.primaryColor} key={employee.name} role={employee.role} image={employee.image}/>)}
            </div>
        </section>
    )
}

export default Team;