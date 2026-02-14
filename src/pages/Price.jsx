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
                    <h3>Pronájem celého domu (1 - 8 osob):</h3>
                    <p>🌴červenec a srpen: 180€/noc/dům</p>
                    <p>🌊červen a září: 130€/noc/dům</p>
                    <p>🌸květen a říjen: 90€/noc/dům</p>
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
            </div>
        </div>
    )
}

export default Price;