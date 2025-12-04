import { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import imageLogo from "../assets/images/logo_casanina.jpg"

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
                    <a href="#top"><img src={imageLogo} alt="logo" /></a>
                </div>

                <nav className={`nav ${isOpen ? "open" : ""}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>O ubytování</a>
                    <a href="#gallery" onClick={() => setIsOpen(false)}>Galerie</a>
                    <a href="#information" onClick={() => setIsOpen(false)}>Informace k pobytu</a>
                    <Link to="/tips" onClick={() => setIsOpen(false)} target='_blank'>Tipy na výlet</Link>
                    <Link to="/transfer" onClick={() => setIsOpen(false)} target='_blank'>Transfer & pronájem vozu</Link>

                    <button className='price-btn' onClick={onOpenPrice}>Ceník</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;