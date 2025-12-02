import './Hero.css';
import { useEffect, useState } from 'react';
import logoImage from '../assets/images/logo_casanina.jpg';

function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);
    return (
        <section className="hero alt">
            <div className='hero-bg'></div>

            <div className={`hero-content ${visible ? "visible" : ""}`}>
                <a href="#top"><img src={logoImage} alt="Casa Nina logo" className='logo-img' /></a>
                <h1>Váš domov na Sardínii🌊</h1>
                <p>Útulné ubytování poblíž moře</p>
                <a href="#contact" className="hero-btn">Zarezervujte si svůj termín</a>
            </div>

        </section>
    );

}

export default Hero;