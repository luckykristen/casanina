import './Footer.css';
import { t } from "../i18n"

function Footer({ lang }) {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p className='footer-text'>{t(lang, "footer_tagline")}</p>
                <p className='footer-location'>{t(lang, "footer_location")}</p>
                <p className='footer-text'>CIN: IT111008C2000U1135 / IUN: U1135</p>
                <p className='footer-copy'>© {new Date().getFullYear()} Casa Nina. {t(lang, "footer_rights")}</p>
            </div>
        </footer>
    );
}

export default Footer;