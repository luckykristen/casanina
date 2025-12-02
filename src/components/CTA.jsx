import './CTA.css'
import { useRef } from "react";
import { useReveal } from "../components/useReveal";
import { Link } from "react-router-dom";

function CTA() {
    const sectionRef = useRef(null);
    useReveal(sectionRef);
    return (
        <section className="section cta" id='contact' ref={sectionRef}>
            <h2>Chcete si rezervovat svůj termín?</h2>
            <p>Zkontrolujte volné termíny a ozvěte se pro více informací.</p>
            <Link to="/kalendar" className="btn-primary">Volné termíny</Link>
        </section>
    );
}

export default CTA;