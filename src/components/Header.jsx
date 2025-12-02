import { useEffect, useState } from 'react';
import './Header.css';

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
                    <a href="#top"><span className="logoName">Casa Nina</span></a>
                </div>

            <nav className='nav'>
                <a href="#about">O ubytování</a>
                <a href="#gallery">Galerie</a>
                <a href="#contact">Volné termíny</a>
            </nav>
            </div>
        </header>
    );
}

export default Header;