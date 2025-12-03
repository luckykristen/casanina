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

                <h2>Ceník pro rok 2026</h2>
                <div className="price-grid">
                    <h3>Pronájem celého domu (max. 6 osob):</h3>
                    <p>🌴červenec a srpen: 180€/noc/dům</p>
                    <p>🌊červen a září: 130€/noc/dům</p>
                    <p>🌸květen a říjen: 90€/noc/dům</p>
                </div>

                <div className="price-grid">
                    <h3>Pronájem auta pro 5 osob:</h3>
                    <p>🌴červenec a srpen: 45€/den</p>
                    <p>🌊ostatní měsíce: 35€/den</p>
                </div>

                <div className="price-grid">
                    <h3>Transfer z a na letiště Cagliari</h3>
                    <p>auto pro 6 lidí: <strong>125€</strong> obousměrná cesta</p>
                    <p>vozík pro 3 psy: 20€ za 1 psa</p>
                    <p>Ostatní transfery dle domluvy</p>
                </div>

                <div className="price-grid">
                    <p>🐶 Zvíčecí kamarádi v ceně ubytování.</p>
                    <p>K dispozici v ceně šnorchlovací sada, plážové slunečníky a křesílka.</p>
                </div>
            </div>
        </div>
    )
}

export default Price;