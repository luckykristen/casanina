import { useState} from "react";

function Price({ onClose }) {
    const [isClosing, setIsClosing] = useState(false);
    
    const handleClose = () => {
        setIsClosing(true);

        setTimeout(() => {
            setIsClosing(true);

            setTimeout(() => {
                onClose();
            }, 300);
        })
    }

    return(
        <div 
        className={`price-overlay ${isClosing ? "closing" : ""}`} 
        onClick={handleClose}
        >
            <div 
            className={`price-drawer ${isClosing ? "closing" : ""}`} 
            onClick={(e) => e.stopPropagation()}>

                <button className="close" onClick={handleClose}>x</button>

                <h2>Ceník</h2>
                <div className="price-grid">
                    <h3>Pronájem celého apartmánu (1 - 8 osob):</h3>
                    <p>🌴červenec a srpen: 180€/noc/apartmán</p>
                    <p>🌊červen a září: 130€/noc/apartmán</p>
                    <p>🌸květen a říjen: 90€/noc/apartmán</p>
                    <br />
                    <strong>Cena nezahrnuje konečný úklid apartmánu 50€.</strong>
                </div>

                <div className="price-grid">
                    <h3>Transfer z a na letiště Cagliari</h3>
                    <p>• Auto pro 6 lidí: <strong>150€</strong> obousměrná cesta.</p>
                    <p>• Thermo vozík pro 3 psy: 20€ za 1 psa.</p>
                    <p>• Transfery z jiných míst dle domluvy.</p>
                    <p>• Výlety - základní sazba: 150€ na den s nájezdem do 150 km.
                        Při vyšším nájezdu km cena dle domluvy. 
                    </p>
                    <p></p>
                </div>

                <div className="price-grid">
                    <p>🐶 Zvířecí kamarádi v ceně ubytování.</p>
                </div>

                <div className="price-grid">
                    <p><strong>Podmínkou závazné rezervace je úhrada zálohy 30% z ceny na účet.</strong> </p>
                    <p>Po zaplacení zálohy Vám přijde na email potvrzení o obdržení zálohy.</p>
                    <p>Číslo bankovního účtu Vám sdělíme do soukromé zprávy.</p>
                    <p>Doplatek ceny za pobyt doplatit minimálně měsíc před Vaším příjezdem na účet, nebo je možnost doplatit v hotovosti při předání klíčů v den Vašeho příjezdu.</p>
                    <p>Měsíc před příjezdem si zavoláme pro potvrzení termínu a způsobu doplacení.</p>
                    <p><strong>VRATNÁ KAUCE: 200€. Při předání apartmánu budeme požadovat uhradit vratnou kauci. Bude vracená při Vašem odjezdu osobně, nebo na Váš účet do 7 dnů od Vašeho odjezdu, v případě, že nebudou žádné způsobené škody.</strong></p>
                </div>

                <div className="price-grid">
                    <h3 className="price_h3"><strong>STORNO A VRÁCENÍ PENĚZ</strong></h3>
                    <p>• Rezervace je závazná po uhrazení zálohy 30% z ceny pobytu.</p>
                    <p>• Při zrušení pobytu <strong>více</strong> než 14 dní před příjezdem <strong>vracíme uhrazenou zálohu</strong>.</p>
                    <p>• Při zrušení pobytu <strong>méně</strong> než 14 dní před příjezdem uhrazená záloha <strong>se nevrací</strong>.</p>
                    <p>• V případě předčasného ukončení pobytu nevzniká nárok na vrácení peněz.</p>
                </div>

                <div className="price-grid">
                    <h3 className="price_h3">Doklady totožnosti</h3>
                    <p>• Každý host je povinen při příjezdu předložit platný doklad totožnosti - občanský průkaz nebo cestovní pás.</p>
                    <p>• Údaje z dokladů jsou povinně hlášeny do italského ubytovacího systému dle platné legislativy.</p>
                    <p>• Bez platného dokladu totožnosti <strong>není možné ubytování poskytnout</strong>!</p>
                </div>

                <div>
                    <h3 className="price_h3">Pobytová taxa</h3>
                    <p>Při příjezdu je nutno zaplatit pobytovou taxu za každého ubytovaného hosta, kromě nezletilých do 14 let a senioři nad 70 let.</p>
                    <p>Cena je <strong>1€ za osobu</strong> pro maximálně 5 po sobě jdoucích nocí v kalendářním roce ve stejném objektu. Tzn. jedna osoba při pobytu 5 a více dní ve stejném objektu platí pouze 5€.</p>
                    <p>3 dny = 3€ za osobu, 7 a více dní = 5€ za osobu</p>
                </div>

            </div>
        </div>
    )
}

export default Price;