import { useEffect, useState } from 'react';
import './Header.css';
import logoImage from '../assets/images/logo_casanina.jpg';

function Header() {
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
                    <a href="#top"><img src={logoImage} alt="Casa Nina logo" className='logo-img' /></a>
                    <span className="logoName">Casa Nina</span>
                </div>

            <nav className='nav'>
                <a href="#about">About</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>
            </div>
        </header>
    );
}

export default Header;