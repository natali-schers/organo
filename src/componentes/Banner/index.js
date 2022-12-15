import './Banner.css';

function Banner() {
    // JSX: como o react lê e transforma a parte visual em um elemento DOM
    return (
        <header className="banner">      
            <img src="/img/banner.png" alt="Banner principal da página do Organo"/>
        </header>
    )
}

export default Banner;