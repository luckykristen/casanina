import './Hero.css';

function Hero() {
  return(
    <section className="hero hero-image">

      <div className="hero-overlay"></div>

      <div className="hero-text">
        <span className="hero-eyebrow">Sardinie · Moře · Klid</span>
        <h1>Váš domov na Sardinii</h1>
        <p>
          Útulné ubytování v blízkosti moře pro skutečný odpočinek.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behaviort: "smooth", block: "start", });
            }}
          >
            Zobrazit dostupnost
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero;