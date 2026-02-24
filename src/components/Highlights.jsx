import './Highlights.css'
import { useRef } from "react"
import { useReveal } from "../components/useReveal"
import { t } from "../i18n"

function Highlights({ lang }) {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section className="section highlights alt" ref={sectionRef}>
      <div className="section-inner">
        <h2>{t(lang, 'hl_title')}</h2>

        <div className="highlights-grid">
          <div className="highlight">🌊 {t(lang, 'hl_1')}</div>
          <div className="highlight">🏡 {t(lang, 'hl_2')}</div>
          <div className="highlight">🌅 {t(lang, 'hl_3')}</div>
          <div className="highlight">🚗 {t(lang, 'hl_4')}</div>
          <div className="highlight">📶 {t(lang, 'hl_5')}</div>
          <div className="highlight">🐾 {t(lang, 'hl_6')}</div>
        </div>
      </div>
    </section>
  )
}

export default Highlights