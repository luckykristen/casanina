import './Location.css';
import { useRef } from "react";
import { useReveal } from "../components/useReveal";
import { t } from "../i18n"

function Location({ lang }) {
        const sectionRef = useRef(null);
        useReveal(sectionRef);
    return (
        <section className="section location alt" id='location' ref={sectionRef}>
            <div className='section-inner'>
                <h2>{t(lang, "loc_title")}</h2>
                <p>{t(lang, "loc_p1")}</p>
                <p>{t(lang, "loc_p2")}</p>
                <p>{t(lang, "loc_p3")}</p>

                <ul className="location-list">
                    <li>🌊 {t(lang, "loc_li_beach")}</li>
                    <li>🍝 {t(lang, "loc_li_food")}</li>
                    <li>🛒 {t(lang, "loc_li_shops")}</li>
                    <li>🚗 {t(lang, "loc_li_airport")}</li>
                </ul>
            </div>
        </section>
    );
}

export default Location;