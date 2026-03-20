import { Link } from "react-router-dom"
import BookingCalendar from "../components/BookingCalendar.jsx"
import Button from "../components/Button.jsx"
import emailjs from '@emailjs/browser'
import { t } from '../i18n'
import { useRef, useState } from "react";



function CalendarPage({ lang, onLangChange }) {

    const [dateRange, setDateRange] = useState([null, null]);
    const formRef = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

        emailjs.sendForm(
            'service_ecllo8i',
            'template_t0rrujj',
        formRef.current,
            'lLFczqM_5ZqqxF4sH'
        ).then(
        () => {
            alert('Poptávka byla odeslána. Brzy se Vám ozveme.');
            formRef.current.reset();
        },
        (error) => {
            alert('Něco se pokazilo. Zkuste to, prosím, znovu.');
            console.error(error);
            }
        );
        };

        const formatDateForInput = (date) => {
        if (!date) return "";
  
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

        const today = formatDateForInput(new Date());

    return (

        <main style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>

            <Link
            to="/"
            style={{
                display: "inline-block",
                marginBottom: "30px",
                textDecoration: "none",
                fontWeight: "600",
            }}>
                {t(lang, "back_button")}
            </Link>
            
            <h1 style={{ marginTop: "30px" }}>{t(lang, "available")}</h1>
            <p>{t(lang, "available_p")}</p>

                <div className="lang-switch">
                    <button
                        type="button"
                        className={`lang-btn ${lang === 'cs' ? 'active' : ''}`}
                        onClick={() => onLangChange('cs')}
                        aria-label="Czech"
                    >
                        🇨🇿
                    </button>

                    <button
                        type="button"
                        className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                        onClick={() => onLangChange('en')}
                        aria-label="English"
                    >
                        🇬🇧
                    </button>

                    <button
                        type="button"
                        className={`lang-btn ${lang === 'it' ? 'active' : ''}`}
                        onClick={() => onLangChange('it')}
                        aria-label="Italiano"
                    >
                        🇮🇹
                    </button>
                </div>

            <BookingCalendar 
            dateRange={dateRange}
            setDateRange={setDateRange} 
            />

            <form 
            ref={formRef}
            onSubmit={sendEmail}
            style={{
                marginTop: "40px", 
                display: "flex",
                flexDirection: "column",
                gap: "15px",
            }}
            >
                <h2>{t(lang, "form_h2")}</h2>

                <div>
                    <p><strong>{t(lang, "form_p")}</strong></p>

                    <label>
                        {t(lang, "form_label_from")}
                        <input 
                        type="date"
                        name="dateFrom"
                        value={formatDateForInput(dateRange[0])}
                        readOnly
                        min={today}
                        required
                        style={{
                            borderRadius: "4px",
                            padding: "5px",
                            fontFamily: "Poppins, sans-serif",
                            marginLeft: "7px",
                            marginTop: "15px"
                        }} 
                        />
                    </label>

                    <br />

                    <label>
                        {t(lang, "form_label_till")}
                        <input 
                        type="date"
                        name="dateTo"
                        value={formatDateForInput(dateRange[1])}
                        readOnly
                        min={today}
                        required
                        style={{
                            borderRadius: "4px",
                            padding: "5px",
                            fontFamily: "Poppins, sans-serif",
                            marginLeft: "7px",
                            marginTop: "10px",
                            marginBottom: "10px"
                        }} 
                        />
                    </label>
                </div>
                
                <input type="text" style={{borderRadius: "4px", padding: "5px", fontFamily: "Poppins, sans-serif"}} name="name" placeholder={t(lang, "form_name")} required />
                <input type="email" style={{borderRadius: "4px", padding: "5px", fontFamily: "Poppins, sans-serif"}} name="email" placeholder={t(lang, "form_email")} required />
                <input type="tel" style={{borderRadius: "4px", padding: "5px", fontFamily: "Poppins, sans-serif"}} name="phone" placeholder={t(lang, "form_tel")} />
                <label>
                        {t(lang, "form_number_guests")}
                        <input 
                            type="number"
                            name="guests"
                            min="1"
                            max="6"
                            placeholder={t(lang, "form_number")}
                            required
                            style={{
                                borderRadius: "4px",
                                padding: "5px",
                                fontFamily: "Poppins, sans-serif",
                                marginLeft: "10px",
                            }}
                            />
                    </label>

                    <label>
                        {t(lang, "form_number_pets")}
                        <input 
                            type="number"
                            name="pets"
                            min="0"
                            max="6"
                            placeholder={t(lang, "form_number")}
                            required
                            style={{
                                borderRadius: "4px",
                                padding: "5px",
                                fontFamily: "Poppins, sans-serif",
                                marginLeft: "10px",
                            }}
                            />
                    </label>

                <textarea name="message" style={{borderRadius: "4px", padding: "5px", fontFamily: "Poppins, sans-serif"}} id="texterea" placeholder={t(lang, "form_message")} rows="5" required></textarea>

                <div style={{ marginTop: "10px" }}>
                    <p><strong>{t(lang, "form_transfer")}</strong></p>

                    <label>
                        <input 
                            type="radio"
                            name="transfer"
                            style={{ marginRight: "5px"}}
                            value="Ano - mám zájem o transfer."
                            required
                        />
                        {t(lang, "form_yes")}
                    </label>

                    <br />

                    <label>
                        <input 
                            type="radio"
                            name="transfer"
                            style={{ marginRight: "5px"}}
                            value="Ne - nemám zájem o transfer."
                        />
                        {t(lang, "form_no")}
                    </label>

                    <br />

                </div>

                <div style={{ marginTop: "10px" }}>
                    <p><strong>{t(lang, "form_rentalcar")}</strong></p>

                    <label>
                        <input 
                            type="radio"
                            name="car"
                            style={{ marginRight: "5px"}}
                            value="Ano - mám zájem o půjčení auta."
                            required
                        />
                        {t(lang, "form_yes")}
                    </label>

                    <br />

                    <label>
                        <input 
                            type="radio"
                            name="car"
                            value="Ne - nemám zájem o půjčení auta."
                            style={{
                                marginBottom: "20px",
                                marginRight: "5px"
                            }}
                        />
                        {t(lang, "form_no")}
                    </label>

                    <p><strong>{t(lang, "form_date_rental")}</strong></p>

                    <label>
                        {t(lang, "form_label_from")}
                        <input 
                        type="date"
                        name="dateFromCar"
                        min={today}
                        style={{
                            borderRadius: "4px",
                            padding: "5px",
                            fontFamily: "Poppins, sans-serif",
                            marginLeft: "7px",
                            marginTop: "7px"
                        }} 
                        />
                    </label>

                    <br />

                    <label>
                        {t(lang, "form_label_till")}
                        <input 
                        type="date"
                        name="dateToCar"
                        min={today}
                        style={{
                            borderRadius: "4px",
                            padding: "5px",
                            fontFamily: "Poppins, sans-serif",
                            marginLeft: "7px",
                            marginTop: "10px",
                            marginBottom: "10px"
                        }} 
                        />
                    </label>

                    <br />

                </div>

                <p>{t(lang, "form_required")}</p>

                <label><strong>{t(lang, "form_confirm")}</strong></label>

                <Button>{t(lang, "form_send_button")}</Button>
            </form>
        </main>
    );

} 


export default CalendarPage;

