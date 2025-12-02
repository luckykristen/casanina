import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p className='footer-text'>Klidné ubytování u moře na Sardínii</p>
                <p className='footer-location'>Calasetta, Sardínie</p>
                <p className='footer-copy'>@ {new Date().getFullYear()} Casa Nina. Všechna práva vyhrazena.</p>
            </div>
        </footer>
    );
}

export default Footer;