import heroImage from '../assets/images/pic_sea2.jpg';
import './Hero.css';
import { useEffect, useState } from 'react';

function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})`}}>

            <div className={`hero-content ${visible ? "visible" : ""}`}>
                <h1>Your home in Sardinia🌊</h1>
                <p>Cozy accomodation near the sea</p>
                <a href="#contact" className="hero-btn">Book your stay</a>
            </div>

            <div className="hero-overlay"></div>
        </section>
    );

}

export default Hero;