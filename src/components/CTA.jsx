import './CTA.css'
import { useRef } from "react";
import { useReveal } from "../components/useReveal";
import { Link } from "react-router-dom";
import { t } from "../i18n"

function CTA({ lang }) {
    const sectionRef = useRef(null);
    useReveal(sectionRef);

    return (
       <section className="section cta" id="contact" ref={sectionRef}>
            <h2>{t(lang, "cta_title")}</h2>
            <p>{t(lang, "cta_subtitle")}</p>

            <Link to="/kalendar" className="btn-primary" target="_blank" rel="noreferrer">
                {t(lang, "cta_btn")}
            </Link>
        </section>
    );
}

export default CTA;