import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './style.css';

const Employee = (props) => {
    function onFavorite() {
        props.onFavorite(props.id);
    }

    const propsFavorite = {
        size: 25,
        onClick: onFavorite,
    }

    return (
        <div className='employee' id={props.id}>
            <AiFillCloseCircle 
                size={32} 
                onClick={() => props.onDelete(props.id)} 
                className='delete'
                title='Deletar colaborador'
            />

            <div className='header' style={{backgroundColor: props.backgroundColor}}>
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className='body'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
                <div className='favorite'>
                    {props.favorite 
                        ? <AiFillHeart {...propsFavorite} className='favorite'/> 
                        : <AiOutlineHeart {...propsFavorite}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Employee;