import { useState } from 'react';
import './style.css';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = (props) => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSave = (evento) => {
        evento.preventDefault();
        props.onRegister({
            name,
            role,
            image,
            team
        })

        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    const onTeamRegister = (evento) => {
        evento.preventDefault();

        props.onTeamRegister({
            name: teamName,
            color: teamColor
        })
        setTeamName('')
        setTeamColor('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <Input type="text" label="Nome" required={true} placeholder="Digite seu nome" value={name} onInputChange={value => setName(value)}/>
                <Input type="text" label="Cargo" required={true} placeholder="Digite seu cargo" value={role} onInputChange={value => setRole(value)}/>
                <Input type="text" label="Imagem" required={true} placeholder="Informe o endereço da imagem" value={image} onInputChange={value => setImage(value)}/>
                <Dropdown label="Time" required={true} items={props.teams} value={team} onInputChange={value => setTeam(value)}/>

                <Button>Criar Card</Button>
            </form>

            <form onSubmit={onTeamRegister}>
                <h2>Preencha os dados para criar a seção de time:</h2>
                <Input type="text" label="Nome" required={true} placeholder="Digite o nome do time" value={teamName} onInputChange={value => setTeamName(value)}/>
                <Input type="color" label="Cor" required={true} placeholder="Digite a cor do time em hexadecimal (#XXXXXX)" value={teamColor} onInputChange={value => setTeamColor(value)}/>

                <Button>Criar Time</Button>
            </form>
        </section>
    )
}

export default Form;