import { useState } from 'react';
import './style.css';
import InputText from '../InputText';
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = (props) => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

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

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" required={true} placeholder="Digite seu nome" value={name} onSave={value => setName(value)}/>
                <InputText label="Cargo" required={true} placeholder="Digite seu cargo" value={role} onSave={value => setRole(value)}/>
                <InputText label="Imagem" required={true} placeholder="Informe o endereço da imagem" value={image} onSave={value => setImage(value)}/>
                <Dropdown label="Time" required={true} items={props.teams} value={team} onSave={value => setTeam(value)}/>

                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;