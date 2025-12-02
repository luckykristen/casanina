import { Link } from "react-router-dom"
import BookingCalendar from "../components/BookingCalendar.jsx"
import Button from "../components/Button.jsx"


function CalendarPage() {
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
            action="mailto:tvuj@email.cz"
            method="POST"
            encType="text/plain"
            style={{
                marginTop: "40px", 
                display: "flex",
                flexDirection: "column",
                gap: "15px",
            }}
            >
                <h2>Nezávazná poptávka</h2>
                
                <input type="text" name="name" placeholder="*Jméno a příjmení" required />
                <input type="email" name="email" placeholder="*Email" required />
                <input type="tel" name="phone" placeholder="Telefon" />
                <textarea name="message" id="texterea" placeholder="Zpráva" rows="5" required></textarea>
                <p>Pole označené * je povinné.</p>

                <Button>Odeslat poptávku</Button>
            </form>
        </main>
    )
} 

export default CalendarPage;