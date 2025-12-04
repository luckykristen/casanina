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
                marginBottom: "30px",
                textDecoration: "none",
                fontWeight: "600",
            }}>
                ← Zpět na hlavní stránku
            </Link>
        <div className="transfer-grid">
           
            <h2>Informace o transferu</h2>
            <p>Pro naše hosty nabízíme transfer z letiště Elmas v Cagliari na ubytování a zpět.</p>
            <div className="transfer-image-grid">
                <img src={imageOne} alt="car" />
                <img src={imageTwo} alt="car" />
                <img src={imageThree} alt="car" />
                <img src={imageFour} alt="car" />
            </div>
            <p>Transfer provádíme komfortním klimatizovaných autem pro 6 pasažérů.</p>

            <div className="transfer-image-grid">
                <img src={imageOne} alt="car" />
            </div>
            <p>Transfer nabízíme i pro Vaše mazlíčky thermo vozíkem pro psy.</p>
            <p>Pro skupinku max. 6 lidí je možné si objednat auto na výlety, kam Vás doveze náš řidič.</p>
            <p>Cena viz. ceník na hlavní stránce.</p>
        </div>
        </>
    )
}

export default Transfer;