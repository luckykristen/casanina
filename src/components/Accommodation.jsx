import './Accommodation.css'
import { useRef } from "react";
import { useReveal } from "../components/useReveal";

function Accommodation() {
    const sectionRef = useRef(null);
    useReveal(sectionRef);
    return (
        <section className="section accommodation" id='about' ref={sectionRef}>
            <div className='section-inner'>
                <h2>O ubytování</h2>
                    <p>
                        Casa Nina je útulné rekreační ubytování v jižní Sardinii,
                        ideální pro páry i rodiny, které hledají klid,
                        přírodu a skutečný středomořský život.
                    </p>
                    <p>
                        Ubytování se nachází v tiché lokalitě nedaleko moře a 
                        nabízí příjemné zázemí pro odpočinek i objevování krás ostrova.
                        Okolí vás nadchne autentickou sardinskou atmosférou
                        a blízkostí pláží i tradičních městeček.
                    </p>
                    <p>
                        Casa Nina je ideální volbou pro hosty, 
                        kteří hledají klidné ubytování u moře,
                        rádi tráví čas venku a chtějí poznat Sardinii v jejím přirozeném tempu.
                    </p>
                    <p>
                        Ráno zde můžete začít kávou na terase s výhledem na moře,
                        den strávit u moře a večer zakončit v klidu s výbornou italskou kuchyní v místních restauracích.
                    </p>

                        <ul className="location-list">
                            <h3>Základní informace</h3>
                            <li>Velikost ubytování: 88m2</li>
                            <li>Kapacita: maximum 6 osob</li>
                            <li>Dispozice: 2 samostatné ložnice každá se svou koupelnou a WC</li>
                            <li>obývací prostor s plně vybavenou kuchyňkou a rozkládacím gaučem</li>
                            <li>Klimatizace ve všech pokojích</li>
                            <li>Exteriér: soukromá terasa s horní ložnice, zahrada s grilem</li>
                        </ul>
            </div>
        </section>
    );
}

export default Accommodation;