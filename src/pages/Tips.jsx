import { Link } from "react-router-dom"
import imageMajak from "../assets/images/majak.jpg"
import imageCalalunga from "../assets/images/calalunga.jpg"
import imageSottotorre from "../assets/images/pic_sea2.jpg"

function Tips() {
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

        <div className="tips-page">
           
            <h1>Tipy na výlety v okolí</h1>

                <div className="tips-list">

                    <div className="tip-card">
                        <img src="" alt="Spiaggia delle Saline" />
                            <div className="tips-content">
                                <h3>Spiaggia delle Saline</h3>
                                <p>Dlouhá a široká písečná pláž</p>
                                <ul>
                                    <li>Dlouhá a široká písečná pláž pojmenovaná podle blízkých solných polí.</li>
                                    <li>Pláž je lemovaná útesy a malým kamenným molem. Na levé straně při pohledu od moře je část poblíž solných polí.</li>
                                    <li>Ideální pro rodiny s dětmi díky mělké vodě u břehu.</li>
                                    <li>K vybavení patří bar s přátelskou obsluhou.</li>
                                    <li>Pláž se nachází 1,5 km od ubytování. Kousek od pláže je parkoviště, které je v sezóně placené.</li>
                                </ul>
                            </div>
                    </div>

                    <div className="tip-card">
                        <img src={imageSottotorre} alt="Sotto Torre Beach" />
                            <div className="tips-content">
                                <h3>Sotto Torre Pláž</h3>
                                <p>Pláž ve měste Calasetta</p>
                    
                                <ul>
                                    <li>Sotto Torre je pláž v Calasettě, blízko centra města, která je vhodná pro rodiny s dětmi díky mělké vodě u břehu.</li>
                                    <li>Je pojmenovaná podle stejnojmenné věže nad ní.</li>
                                    <li>Pláž je částečně chráněna před větrem a nabízí stín borovic.</li>
                                    <li>Voda je krišťálově čistá a většinou klidná.</li>
                                    <li>K dispozici je parkoviště z hlavní ulice. V sezóně je zpoplatněné.</li>
                                    <li>Pláž se nachází 400 metrů od ubytování.</li>
                                </ul>
                            </div>
                    </div>

                    <div className="tip-card">
                        <img src="" alt="Calasetta La Torre" />
                            <div className="tips-content">
                                <h3>Calasetta La Torre</h3>
                                <p>Historická věž ve měste Calasetta</p>
                                <ul>
                                    <li>Calasetta La Torre je historická věž, která sloužila k obráně proti pirátům a je dnes symbolem města.</li>
                                    <li>Věž, postavená kolem roku 1750, je 20 metrů vysoká a nabízí panoramatický výhled na okolní oblast, 
                                    včetně sousedního ostrova San Pietro, pláže Sotto Torre a města Calasetta.
                                    </li>
                                    <li>Věž je památkově chráněna a dnes se v ní nachází archeologické muzeum a prostory pro výstavy a společenské akce.</li>
                                </ul>
                            </div>
                    </div>

                    <div className="tip-card">
                        <img src={imageCalalunga} alt="Cala Lunga" />
                            <div className="tips-content">
                                <h3>Spiaggia Cala Lunga</h3>
                                <p>Úzká pláž Cala Lunga</p>
                                <ul>
                                    <li>Pláž Cala Lunga je typická svou úzkou zátokou s písečnou pláží na jihozápadě Sardinie na ostrově Sant'Antioco.</li>
                                    <li>Je oblíbená pro svou klidnou atmosféru, průzračné moře a okolní skály.</li>
                                    <li>Úzká, dlouhá zátoka s písečnou pláží smíchanou s fragmenty lastur a korálů.</li>
                                    <li>Ideální pro plavání a šnorchlování.</li>
                                </ul>
                            </div>
                    </div>

                    <div className="tip-card">
                        <img src={imageMajak} alt="Faro Mangiabarche" />
                            <div className="tips-content">
                                <h3>Faro Mangiabarche</h3>
                                <p>Navigační maják kousek od města Calasetta</p>
                
                                <ul>
                                    <li>Název znamená doslova "Požírač lodí".</li>
                                    <li>Maják Faro Mangiabarche je navigační maják na západním pobřeží ostrova, kousek od města Calasetta.</li>
                                    <li>Stojí na skalnatém útesu Punta Mangiabarche, který získal jméno po starých lodích, které se v bouři roztříštily o skály.</li>
                                    <li>Maják byl postaven v roce 1935, aby varoval námořníky před nebezpečnými útesy.</li>
                                    <li>Západy Slunce zde mají mimořádnou atmosféru. V zimě a při silném mistrálu se okolí mění na fascinující ukázku síly přírody
                                     - vlny často sahají až k vrcholu majáku.</li>
                                    <li>Plavání u majáku není doporučeno - podvodní skály a proudy jsou zrádné. Maják je ale skvělé místo pro fotografy a dronaře.</li>
                                </ul>
                            </div>
                    </div>
                
                </div>
        </div>
        </>
    )
}

export default Tips;