import { Link } from "react-router-dom"
import imageMajak from "../assets/images/majak.jpg"
import imageCalalunga from "../assets/images/calalunga.jpg"
import imageSottotorre from "../assets/images/pic_sea2.jpg"
import citytower from "../assets/images/mestovez.jpeg"
import carloforte from "../assets/images/carloforte.jpg"
import portoflavia from "../assets/images/porto_flavia.jpeg"

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
                        <img src={carloforte} alt="Spiaggia delle Saline" />
                            <div className="tips-content">
                                <h3>Carloforte</h3>
                                <p className="p_tips">Město na ostrově San Pietro</p>
                                <ul>
                                    <li>Středomořská atmosféra díky historickému centru s barevnými domy.</li>
                                    <li>Úchvatné výhledy na moře.</li>
                                    <li>Je proslulé svým spojením s lovem tuňáků, hlavně díky každoročnímu mezinárodnímu kulinářskému festivalu Girotonno.</li>
                                    <li>Z Calasetty pluje skoro kazdou hodinu trajekt.</li>
                                    <li>Doporučujeme ochutnat tuňáka v místních restauracích.</li>
                                </ul>
                            </div>
                    </div>

                    <div className="tip-card">
                        <img src={imageSottotorre} alt="Sotto Torre Beach" />
                            <div className="tips-content">
                                <h3>Sotto Torre Pláž</h3>
                                <p className="p_tips">Pláž ve měste Calasetta</p>
                    
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
                        <img src={citytower} alt="Calasetta La Torre" />
                            <div className="tips-content">
                                <h3>Calasetta La Torre</h3>
                                <p className="p_tips">Historická věž ve měste Calasetta</p>
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
                                <p className="p_tips">Úzká pláž Cala Lunga</p>
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
                                <p className="p_tips">Navigační maják kousek od města Calasetta</p>
                
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

                    <div className="tip-card">
                        <img src={portoflavia} alt="Porto Flavia" />
                            <div className="tips-content">
                                <h3>Porto Flavia</h3>
                                <p className="p_tips">Bývalý důlní přístav vytesaný do útesů</p>
                
                                <ul>
                                    <li>Přístav vybudovaný v roce 1924. Sloužil k přímé nakládce olova a zinku z okolních dolů na lodě, což bylo na svoje dobu inženýrské mistrovské dílo.</li>
                                    <li>Stavba nese jméno dcery svého navrháře - inženýra Cesare Vecelliho. </li>
                                    <li>Komplex se skládá ze dvou pater tunelů, které ústí vysoko nad mořskou hladinou.</li>
                                    <li>Památka UNESCO.</li>
                                </ul>
                            </div>
                    </div>
                
                </div>
        </div>
        </>
    )
}

export default Tips;