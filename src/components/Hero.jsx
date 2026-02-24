import './Hero.css'
import { t } from '../i18n'

function Hero({ lang }) {
  return (
    <section className="hero hero-image">
      <div className="hero-overlay"></div>

      <div className="hero-text">
        <span className="hero-eyebrow">
          {t(lang, 'hero_tags')}
        </span>

        <h1>
          {t(lang, 'hero_title')}
        </h1>

        <p>
          {t(lang, 'hero_subtitle')}
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            {t(lang, 'hero_cta')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero