import { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import imageLogo from "../assets/images/logo_casanina.jpg";
import { t } from '../i18n'

function Header({ lang, onLangChange, onOpenPrice}) {
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
                    <a href="#about" onClick={(e) => handleNav(e, "about")}>
                        {t(lang, 'nav_about')}
                    </a>

                    <a href="#gallery" onClick={(e) => handleNav(e, "gallery")}>
                        {t(lang, 'nav_gallery')}
                    </a>

                    <a href="#information" onClick={(e) => handleNav(e, "information")}>
                        {t(lang, 'nav_information')}
                    </a>

                    <a href="#location" onClick={(e) => handleNav(e, "location")}>
                        {t(lang, 'nav_location')}
                    </a>

                    <Link
                        to="/tips"
                        onClick={() => setIsOpen(false)}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t(lang, 'nav_tips')}
                    </Link>

                    <Link
                        to="/transfer"
                        onClick={() => setIsOpen(false)}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t(lang, 'nav_transfer')}
                    </Link>

                    <button className='price-btn' onClick={onOpenPrice}>
                        {t(lang, 'nav_prices')}
                    </button>
                </nav>

                <div className="lang-switch">
                    <button
                        type="button"
                        className={`lang-btn ${lang === 'cs' ? 'active' : ''}`}
                        onClick={() => onLangChange('cs')}
                        aria-label="Czech"
                    >
                        🇨🇿
                    </button>

                    <button
                        type="button"
                        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                        onClick={() => onLangChange('en')}
                        aria-label="English"
                    >
                        🇬🇧
                    </button>

                    <button
                        type="button"
                        className={`lang-btn ${lang === 'it' ? 'active' : ''}`}
                        onClick={() => onLangChange('it')}
                        aria-label="Italiano"
                    >
                        🇮🇹
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;