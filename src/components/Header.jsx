import { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ onOpenPrice}) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

                <button 
                className={`burger ${isOpen ? "open" : ""}`} 
                onClick={() => setIsOpen(!isOpen)}
                aria-label='Menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${isOpen ? "open" : ""}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>O ubytování</a>
                    <a href="#gallery" onClick={() => setIsOpen(false)}>Galerie</a>
                    <a href="#information" onClick={() => setIsOpen(false)}>Informace k pobytu</a>
                    <a href="#tips" onClick={() => setIsOpen(false)}>Tipy na výlet</a>
                    <Link to="/transfer" onClick={() => setIsOpen(false)}>Letištní transfer</Link>

                    <button className='price-btn' onClick={onOpenPrice}>Ceník</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;