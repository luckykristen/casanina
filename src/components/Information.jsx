import './Information.css'
import { useRef } from "react";
import { useReveal } from "../components/useReveal";

function Information() {
        const sectionRef = useRef(null);
        useReveal(sectionRef);
    return (
        <section className="section information alt" id='information' ref={sectionRef}>
            <div className='section-inner'>
                <h2>Infromace k pobytu</h2>
                <p>
                    • Ubytování je určeno pro 1-6 osob.
                    V prvním patře se nachází obývací pokoj s kuchyňským koutem, který je plně vybavený nádobím, elektrickou troubou,
                    plynovým sporákem a kávovarem.
                </p>
                <p>
                    • V suterénu je ložnice s dvěma samostatnými lůžkovými postelemi, gaučíkem, pracovním koutem a vlastní koupelnou s WC a bidetem.
                </p>
                <p>
                    • V prvním patře je další ložnice pro 2 osoby s manželskou postelí, komodou, 
                    terasou s výhledem na moře a vlastní koupelnou s WC a sprchovým koutem.
                </p>
                <p>
                    • K dispozici je pračka a sušička.
                </p>
                <p>
                    • Domek je plně klimatizovaný.
                </p>
                <p>
                    • Samozřejmostí jsou ručníky a vybavené koupelny veškerou hygienou a fény.
                </p>
                <p>
                    • K dispozici plážové vybavení: 2x plážová křesílka, 1x slunečník a šnorchlovací sada.
                </p>
                <p>
                    • Ubytování je pet-friendly bez ohledu na velikosti či druhu domácího zvířete. Zvířecí kamarádi jsou v ceně ubytování.
                </p>
            </div>
        </section>
    );
}

export default Information;