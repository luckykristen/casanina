import './Hero.css';
import { useEffect, useState } from 'react';
import video from "../assets/calasetta-lighthouse.mp4"


function Hero() {
return(
<section className="hero hero--video">
  <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={video} type="video/mp4" />
  </video>

  <div className="hero-overlay"></div>

  <div className="hero-text">
    <span className="hero-eyebrow">Sardinie · Moře · Klid</span>
    <h1>Váš domov na Sardinii</h1>
    <p>
      Útulné ubytování v blízkosti moře pro skutečný odpočinek.
    </p>

    <div className="hero-actions">
      <a href="#contact" className="btn-primary">
        Zobrazit dostupnost
      </a>
    </div>
  </div>
</section>
)
}

export default Hero;