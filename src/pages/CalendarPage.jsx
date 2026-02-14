import { Link } from "react-router-dom"
import BookingCalendar from "../components/BookingCalendar.jsx"
import Button from "../components/Button.jsx"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


function CalendarPage() {

        const today = new Date().toISOString().split("T")[0];

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
                ← Zpět na hlavní stránku
            </Link>
            
            <h1 style={{ marginTop: "30px" }}>Kalendář obsazenosti</h1>
            <p>Zkontrolujte dostupnost a napište nám.</p>

            <BookingCalendar />

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
                <h2>Nezávazná poptávka</h2>

                <div>
                    <p><strong>* Termín pobytu</strong></p>

                    <label>
                        Od:
                        <input 
                        type="date"
                        name="dateFrom"
                        min={today}
                        required
                        style={{
                            borderRadius: "4px",
                            padding: "5px",
                            fontFamily: "Poppins, sans-serif",
                            marginLeft: "7px"
                        }} 
                        />
                    </label>

                    <br />

                    <label>
                        Do:
                        <input 
                        type="date"
                        name="dateTo"
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
                
                <input type="text" style={{borderRadius: "4px", padding: "5px", fontFamily: "Poppins, sans-serif"}} name="name" placeholder="*Jméno a příjmení" required />
                <input type="email" style={{borderRadius: "4px", padding: "5px", fontFamily: "Poppins, sans-serif"}} name="email" placeholder="*Email" required />
                <input type="tel" style={{borderRadius: "4px", padding: "5px", fontFamily: "Poppins, sans-serif"}} name="phone" placeholder="Telefon" />
                <label>
                        * Počet ubytovaných osob:
                        <input 
                            type="number"
                            name="guests"
                            min="1"
                            max="6"
                            placeholder="Počet osob"
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
                        * Počet domácích mazlíčků:
                        <input 
                            type="number"
                            name="pets"
                            min="0"
                            max="6"
                            placeholder="Počet zvířat"
                            required
                            style={{
                                borderRadius: "4px",
                                padding: "5px",
                                fontFamily: "Poppins, sans-serif",
                                marginLeft: "10px",
                            }}
                            />
                    </label>
                <textarea name="message" style={{borderRadius: "4px", padding: "5px", fontFamily: "Poppins, sans-serif"}} id="texterea" placeholder="Zpráva" rows="5" required></textarea>

                <div style={{ marginTop: "10px" }}>
                    <p><strong>* Máte zájem o transfer?</strong></p>

                    <label>
                        <input 
                            type="radio"
                            name="transfer"
                            value="Ano - mám zájem o transfer."
                            required
                        />
                         Ano
                    </label>

                    <br />

                    <label>
                        <input 
                            type="radio"
                            name="transfer"
                            value="Ne - nemám zájem o transfer."
                        />
                         Ne
                    </label>

                    <br />

                </div>

                <div style={{ marginTop: "10px" }}>
                    <p><strong>* Máte zájem o půjčení auta?</strong></p>

                    <label>
                        <input 
                            type="radio"
                            name="car"
                            value="Ano - mám zájem o půjčení auta."
                            required
                        />
                         Ano
                    </label>

                    <br />

                    <label>
                        <input 
                            type="radio"
                            name="car"
                            value="Ne - nemám zájem o půjčení auta."
                        />
                         Ne
                    </label>

                    <br />

                </div>

                <p>Pole označené * je povinné.</p>

                <Button>Odeslat poptávku</Button>
            </form>
        </main>
    );
} 


export default CalendarPage;

