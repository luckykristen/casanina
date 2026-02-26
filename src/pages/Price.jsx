import { useState} from "react";
import { t } from "../i18n"

function Price({ lang, onClose }) {
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

                <h2>{t(lang, "price_title")}</h2>
                <div className="price-grid">
                    <h3>{t(lang, "price_apartment_title")}</h3>
                    <p>{t(lang, "price_july_august")}</p>
                    <p>{t(lang, "price_june_september")}</p>
                    <p>{t(lang, "price_may_october")}</p>
                    <br />
                    <strong>{t(lang, "price_cleaning_fee")}</strong>
                </div>

                <div className="price-grid">
                    <h3>{t(lang, "price_transfer_title")}</h3>
                    <p>{t(lang, "price_transfer_car")}</p>
                    <p>{t(lang, "price_transfer_dogs")}</p>
                    <p>{t(lang, "price_transfer_other")}</p>
                    <p>{t(lang, "price_transfer_trips")}</p>
                </div>

                <div className="price-grid">
                    <p>{t(lang, "price_pets")}</p>
                </div>

                <div className="price-grid">
                    <p><strong>{t(lang, "price_deposit_1")}</strong></p>
                    <p>{t(lang, "price_deposit_2")}</p>
                    <p>{t(lang, "price_deposit_3")}</p>
                    <p>{t(lang, "price_deposit_4")}</p>
                    <p>{t(lang, "price_deposit_5")}</p>
                    <p><strong>{t(lang, "price_deposit_deposit")}</strong></p>
                </div>

                <div className="price-grid">
                    <h3 className="price_h3"><strong>{t(lang, "price_cancel_title")}</strong></h3>
                    <p>{t(lang, "price_cancel_1")}</p>
                    <p>{t(lang, "price_cancel_2")}</p>
                    <p>{t(lang, "price_cancel_3")}</p>
                    <p>{t(lang, "price_cancel_4")}</p>
                </div>

                <div className="price-grid">
                    <h3 className="price_h3">{t(lang, "price_docs_title")}</h3>
                    <p>{t(lang, "price_docs_1")}</p>
                    <p>{t(lang, "price_docs_2")}</p>
                    <p><strong>{t(lang, "price_docs_3")}</strong></p>
                </div>

                <div>
                    <h3 className="price_h3">{t(lang, "price_tax_title")}</h3>
                    <p>{t(lang, "price_tax_1")}</p>
                    <p>{t(lang, "price_tax_2")}</p>
                </div>

            </div>
        </div>
    )
}

export default Price;