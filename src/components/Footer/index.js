import './style.css';
import logo from './logo.png';

const Footer = () => {
    return (
    <footer className="footer">
        <section>
            <img src={logo} alt="Organo" className='logo'/>
        </section>
        <section>
            <p>
                Desenvolvido por Natali Schers
            </p>
        </section>
    </footer>
    )
}

export default Footer;