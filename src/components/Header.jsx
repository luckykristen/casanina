import { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import imageLogo from "../assets/images/logo_casanina.jpg"

function Header({ onOpenPrice}) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);    
    const scrollTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (e, id) => {
        e.preventDefault();
        setIsOpen(false);

        const el = document.getElementById(id);
        if (!el) return;
        
            el.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest',
             });

             history.replaceState(null, '', `#${id}`);
    };


    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className='header-inner'>
                <div className='logo'>
                    <a href="#top" onClick={scrollTop}><img src={imageLogo} alt="logo" /></a>
                </div>

                <nav className={`nav ${isOpen ? "open" : ""}`}>
                    <a href="#about" onClick={(e) => handleNav(e, "about")}>O ubytování</a>
                    <a href="#gallery" onClick={(e) => handleNav(e, "gallery")}>Galerie</a>
                    <a href="#information" onClick={(e) => handleNav(e, "information")}>Informace</a>
                    <a href="#location" onClick={(e) => handleNav(e, "location")}>Lokalita</a>

                    <Link to="/tips" onClick={(e) => setIsOpen(false)} target='_blank'>Tipy na výlet</Link>
                    <Link to="/transfer" onClick={(e) => setIsOpen(false)} target='_blank'>Transfer & pronájem vozu</Link>

                    <button className='price-btn' onClick={onOpenPrice}>Ceník</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;