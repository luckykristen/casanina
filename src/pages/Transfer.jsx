import { Link } from "react-router-dom"

function Transfer() {
    return(
        <>
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
        <div>
           
            <h2>Informace o transferu</h2>
        </div>
        </>
    )
}

export default Transfer;