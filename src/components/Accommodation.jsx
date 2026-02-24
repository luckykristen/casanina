import './Accommodation.css'
import { useRef } from "react";
import { useReveal } from "../components/useReveal";
import { t } from "../i18n"

function Accommodation({ lang }) {
    const sectionRef = useRef(null);
    useReveal(sectionRef);

    return (
        <section className="section accommodation" id='about' ref={sectionRef}>
            <div className='section-inner'>
                <h2>{t(lang, "acc_title")}</h2>
                    <p>{t(lang, "acc_p1")}</p>
                    <p>{t(lang, "acc_p2")}</p>
                    <p>{t(lang, "acc_p3")}</p>
                    <p>{t(lang, "acc_p4")}</p>

                        <ul className="location-list">
                            <h3>{t(lang, "acc_info_title")}</h3>
                            <li>{t(lang, "acc_info_size")}</li>
                            <li>{t(lang, "acc_info_capacity")}</li>
                            <li>{t(lang, "acc_info_layout")}</li>
                            <li>{t(lang, "acc_info_living")}</li>
                            <li>{t(lang, "acc_info_exterior")}</li>
                        </ul>
            </div>
        </section>
    );
}

export default Accommodation;