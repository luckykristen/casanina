import { Link } from "react-router-dom"
import imageOne from "../assets/images/carone.jpg"
import imageTwo from "../assets/images/cartwo.jpg"
import imageThree from "../assets/images/carthree.jpg"
import imageFour from "../assets/images/carfour.jpg"

function Transfer() {
    return(
        <>
        <Link
            to="/"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "30px",
                marginTop: "30px",
                textDecoration: "none",
                fontWeight: "600",
            }}>
                ← Zpět na hlavní stránku
            </Link>
        <div className="transfer-grid">
           
            <h2>✈︎ Transfer</h2>
            <p>• 🇨🇿 Pro naše hosty nabízíme transfer z letiště Elmas v Cagliari na ubytování a zpět.</p>
            <p>• 🇬🇧 For our guests, we offer transfers from Cagliari Elmas Airport to the accommodation and back.</p>
            <p>• 🇮🇹 Per i nostri ospiti offriamo il transfer dall’aeroporto di Cagliari Elmas all’alloggio e ritorno.</p>
            <div className="transfer-image-grid">
                <img src={imageOne} alt="car" />
                <img src={imageTwo} alt="car" />
                <img src={imageThree} alt="car" />
                <img src={imageFour} alt="car" />
            </div>
            <p>🇨🇿</p>
            <p>Transfer provádíme komfortním klimatizovaných autem pro 6 pasažérů.</p>
            <p>🐶 Transfer nabízíme i pro Vaše mazlíčky thermo vozíkem pro psy.</p>
            <br />
            <p>🗺️ Pro skupinku max. 6 lidí je možné si objednat auto na výlety, kam Vás doveze náš řidič.</p>
            <p>Cena viz. ceník na hlavní stránce.</p>
            <br />
            <p>🇬🇧</p>
            <p>We provide transfers in a comfortable, air-conditioned vehicle for up to 6 passengers.</p>
            <p>🐶 We also offer transfers for your pets with a thermo dog trailer.</p>
            <p>🗺️ For groups of up to 6 people, you can book a car for trips with our driver taking you to your destination.</p>
            <p>Prices: see the price list on the main page.</p>
            <br />
            <p>🇮🇹</p>
            <p>Effettuiamo transfer con un veicolo confortevole e climatizzato per un massimo di 6 passeggeri.</p>
            <p>🐶 Offriamo il servizio di transfer anche per i vostri animali domestici con un carrellino termico per cani.</p>
            <p>🗺️ Per gruppi fino a 6 persone è possibile prenotare un’auto per escursioni con il nostro autista che vi accompagnerà a destinazione.</p>
            <p>Prezzi: vedi il listino prezzi nella pagina principale.</p>
        </div>
        </>
    )
}

export default Transfer;