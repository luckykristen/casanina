import './Location.css';
import { useRef } from "react";
import { useReveal } from "../components/useReveal";

function Location() {
        const sectionRef = useRef(null);
        useReveal(sectionRef);
    return (
        <section className="section location alt" id='location' ref={sectionRef}>
            <div className='section-inner'>
                <h2>Lokalita</h2>
            <p>
                Apartmán Casa Nina se nachází v klidné části jihozápadní Sardínie, v malebném městečku Calasetta
                v blízkosti krásných pláží, 
                pobřežních stezek a tradičních sardinských restaurací.
            </p>
            <p>
                Calasetta se nachází na ostrově Sant'Antioco, který je doslova rájem pro cyklisty - klidné silnice, krásné výhledy na moře a trasy vhodné jak pro rekreační ježdění, tak pro náročnější výlety.
            </p>
            <p>
                Ideální místo pro objevování ostrova, kde si zároveň užijete klid a soukromí.
            </p>

            <ul className="location-list">
                <li>🌊 Pláž: 5 minut chůze</li>
                <li>🍝 Restaurace & kavárny: 5–10 minut chůze</li>
                <li>🛒 Obchody: v docházkové vzdálenosti</li>
                <li>🚗 Letiště Cagliari: cca 1 hodina</li>
            </ul>
            </div>
        </section>
    );
}

export default Location;