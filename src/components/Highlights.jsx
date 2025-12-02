import './Highlights.css';
import { useRef } from "react";
import { useReveal } from "../components/useReveal";

function Highlights() {
    const sectionRef = useRef(null);
    useReveal(sectionRef);
    return (
        <section className="section highlights alt" ref={sectionRef}>
            <div className='section-inner'>
                <h2>Proč si zamilujete Casa Nina?</h2>

                <div className="highlights-grid">
                    <div className="highlight">🌊 Pár minut chůze k moři</div>
                    <div className="highlight">🏡 Soukromá terasa s venkovním krbem</div>
                    <div className="highlight">🌅 Klidná a tichá lokalita</div>
                    <div className="highlight">🚗 Parkování zdarma</div>
                    <div className="highlight">📶 Rychlé wi-fi zdarma</div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;