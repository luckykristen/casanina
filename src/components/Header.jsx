import { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ onOpenPrice}) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className='header-inner'>
                <div className='logo'>
                    <a href="#top"><span className="logoName">Casa Nina</span></a>
                </div>

                <nav className='nav'>
                    <a href="#about">O ubytování</a>
                    <a href="#gallery">Galerie</a>
                    <a href="#information">Informace k pobytu</a>
                    <a href="#contact">Tipy na výlet</a>
                    <Link to="/transfer">Letištní transfer</Link>

                    <button className='price-btn' onClick={onOpenPrice}>Ceník</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;