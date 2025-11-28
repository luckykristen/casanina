import heroImage from '../assets/images/pic_seaone.jpg';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})`}}>
            <div className='hero-overlay'>
                <h2>Your home in Sardinia🌊</h2>
                <p>Cozy accomodation near the sea</p>
                <button>Book your stay</button>
            </div>
        </section>
    );

}

export default Hero;