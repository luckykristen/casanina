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
                <p>• Ubytování je určeno pro 1-8 osob.</p>
                <p>
                    • V prvním patře se nachází obývací pokoj s kuchyňským koutem, který je plně vybavený nádobím, elektrickou troubou,
                    plynovým sporákem a kávovarem. Dále je zde jídelní stůl, pohodlná rozkládací pohovka pro 2 osoby a TV. Taktéž je tu koupelna se sprchovým koutem, WC a bidetem.
                </p>
                <p>
                    • V suterénu je ložnice s manželskou postelí a 2 jednolůžkovými postelemi, pracovním koutem a vlastní koupelnou se sprchou, WC a bidetem.
                </p>
                <p>
                    • V prvním patře je další ložnice pro 2 osoby s manželskou postelí, komodou, 
                    balkónkem s výhledem na moře, vlastní koupelnou s WC a sprchovým koutem.
                </p>
                <p>
                    • K dispozici je pračka a sušička.
                </p>
                <p>
                    • Samozřejmostí jsou ručníky a vybavené koupelny veškerou hygienou. Fén a žehlička jsou také k dispozici. <br />
                     <strong>Ručníky nejsou k použití na pláž!</strong>
                </p>
                <p>
                    • Ubytování je pet-friendly bez ohledu na velikosti či druhu domácího zvířete. Zvířecí kamarádi jsou v ceně ubytování.
                </p>
                <p>
                    • Wi-Fi připojení je dostupné v celém apartmánu.
                </p>
                <p>
                    • Parkování je možné na dvorku před apartmánem nebo v ulici.
                </p>
                <p>
                    • Check-in je možný od 15:00, check-out do 10:00.
                </p>
            </div>
        </section>
    );
}

export default Information;