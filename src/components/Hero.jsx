import heroImage from '../assets/images/pic_sea2.jpg';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})`}}>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1>Your home in Sardinia🌊</h1>
                <p>Cozy accomodation near the sea</p>
                <a href="#contact" className="hero-btn">Book your stay</a>
            </div>
        </section>
    );

}

export default Hero;