import './Information.css'
import { useRef } from "react";
import { useReveal } from "../components/useReveal";
import { t } from "../i18n"

function Information({ lang }) {
        const sectionRef = useRef(null);
        useReveal(sectionRef);
    return (
        <section className="section information alt" id='information' ref={sectionRef}>
            <div className='section-inner'>
                <h2>{t(lang, "info_title")}</h2>
                <p>• {t(lang, "info_p1")}</p>
                <p>• {t(lang, "info_p2")}</p>
                <p>• {t(lang, "info_p3")}</p>
                <p>• {t(lang, "info_p4")}</p>
                <p>• {t(lang, "info_p5")}</p>

                <p>
                   • {t(lang, "info_p6")}
                <br />
                    <strong>{t(lang, "info_towels_warning")}</strong>
                </p>

                <p>• {t(lang, "info_p7")}</p>
                <p>• {t(lang, "info_p8")}</p>
                <p>• {t(lang, "info_p9")}</p>
                <p>• {t(lang, "info_p10")}</p>    
            </div>
        </section>
    );
}

export default Information;