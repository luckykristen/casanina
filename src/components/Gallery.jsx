import u1 from "../assets/images/pohlednadum.jpeg"
import u2 from "../assets/images/pohlednadum2.jpeg"
import u3 from "../assets/images/obyvakkuchyn2.jpeg"
import u4 from "../assets/images/obyvakgauc.jpeg"
import u5 from "../assets/images/obyvakkuchyn.jpeg"
import u6 from "../assets/images/kuchyn.jpeg"
import u7 from "../assets/images/koupelnaprizemi.jpeg"
import u8 from "../assets/images/koupelnaprizemi2.jpeg"
import u9 from "../assets/images/lozniceprvnipatro2.jpeg"
import u10 from "../assets/images/lozniceprvnipatro.jpeg"
import u11 from "../assets/images/koupelnaprvnipatro.jpeg"
import u12 from "../assets/images/loznice_suteren.jpeg"
import u13 from "../assets/images/koupelnasuteren2.jpeg"
import u14 from "../assets/images/koupelnasuteren.jpeg"
import u15 from "../assets/images/chodbadolu.jpeg"
import u16 from "../assets/images/chodbanahoru.jpeg"
import u17 from "../assets/images/vyhled2.jpeg"
import u18 from "../assets/images/vyhled3.jpeg"

import e1 from "../assets/images/mestomore.jpeg"
import e2 from "../assets/images/mestomorelod.jpeg"
import e3 from "../assets/images/mestoplaz.jpeg"
import e4 from "../assets/images/mestoplaz2.jpeg"
import e5 from "../assets/images/mestopristav.jpeg"
import e6 from "../assets/images/mestopromenada.jpeg"
import e7 from "../assets/images/mestoulice.jpeg"
import e8 from "../assets/images/mestoulice2.jpeg"
import e9 from "../assets/images/mestoulice3.jpeg"
import e10 from "../assets/images/mestoulice4.jpeg"
import e11 from "../assets/images/mestovez.jpeg"
import e12 from "../assets/images/mestoviaroma.jpeg"
import e13 from "../assets/images/mestoviaroma2.jpeg"

import "./Gallery.css";
import { useEffect, useMemo, useState } from "react";

// importy fotek (přidej si další)
/*import u1 from "../assets/images/pic_high1.jpg";
import u2 from "../assets/images/pic_high2.jpg";
import u3 from "../assets/images/pic_high3.jpg";

import e1 from "../assets/images/pic_sea1.jpg";
import e2 from "../assets/images/pic_sea2.jpg";
import e3 from "../assets/images/pic_sea3.jpg";*/

function Gallery() {
  // 1) Struktura po kategoriích
  const categories = useMemo(
    () => [
      {
        title: "Ubytování",
        photos: [
          { src: u1, alt: "Ubytování – fotka 1" },
          { src: u2, alt: "Ubytování – fotka 2" },
          { src: u3, alt: "Ubytování – fotka 3" },
          { src: u4, alt: "Ubytování – fotka 4" },
          { src: u5, alt: "Ubytování – fotka 5" },
          { src: u6, alt: "Ubytování – fotka 6" },
          { src: u7, alt: "Ubytování – fotka 7" },
          { src: u8, alt: "Ubytování – fotka 8" },
          { src: u9, alt: "Ubytování – fotka 9" },
          { src: u10, alt: "Ubytování – fotka 10" },
          { src: u11, alt: "Ubytování – fotka 11" },
          { src: u12, alt: "Ubytování – fotka 12" },
          { src: u13, alt: "Ubytování – fotka 13" },
          { src: u14, alt: "Ubytování – fotka 14" },
          { src: u15, alt: "Ubytování – fotka 15" },
          { src: u16, alt: "Ubytování – fotka 16" },
          { src: u17, alt: "Ubytování – fotka 17" },
          { src: u18, alt: "Ubytování – fotka 18" },
        ],
      },
      {
        title: "Město Calasetta a okolí",
        photos: [
          { src: e1, alt: "Exteriér – fotka 1" },
          { src: e2, alt: "Exteriér – fotka 2" },
          { src: e3, alt: "Exteriér – fotka 3" },
          { src: e4, alt: "Exteriér – fotka 4" },
          { src: e5, alt: "Exteriér – fotka 5" },
          { src: e6, alt: "Exteriér – fotka 6" },
          { src: e7, alt: "Exteriér – fotka 7" },
          { src: e8, alt: "Exteriér – fotka 8" },
          { src: e9, alt: "Exteriér – fotka 9" },
          { src: e10, alt: "Exteriér – fotka 10" },
          { src: e11, alt: "Exteriér – fotka 11" },
          { src: e12, alt: "Exteriér – fotka 12" },
          { src: e13, alt: "Exteriér – fotka 13" },
        ],
      },
      // přidej další kategorie...
    ],
    []
  );

  // 2) Lightbox stav: která kategorie + která fotka
  const [open, setOpen] = useState(null); 
  // open = { catIndex: number, photoIndex: number } | null

  const close = () => setOpen(null);

  // 3) Zamknout scroll stránky, když je otevřený lightbox
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // 4) Klávesy: ESC zavře, šipky přepínají v rámci kategorie
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();

      if (e.key === "ArrowRight") {
        setOpen((o) => {
          const len = categories[o.catIndex].photos.length;
          return { ...o, photoIndex: (o.photoIndex + 1) % len };
        });
      }

      if (e.key === "ArrowLeft") {
        setOpen((o) => {
          const len = categories[o.catIndex].photos.length;
          return { ...o, photoIndex: (o.photoIndex - 1 + len) % len };
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, categories]);

  const current =
    open ? categories[open.catIndex].photos[open.photoIndex] : null;

  return (
    <section className="section gallery alt">
      <h2 id="gallery">Galerie</h2>

      {categories.map((cat, catIndex) => (
        <div className="gallery-block" key={cat.title}>
          <h3>{cat.title}</h3>

          <div className="gallery-grid">
            {cat.photos.map((p, photoIndex) => (
              <button
                key={p.src}
                className="gallery-item"
                onClick={() => setOpen({ catIndex, photoIndex })}
                aria-label={`Otevřít fotku: ${p.alt}`}
                >
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      ))}

      {open && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={close} aria-label="Zavřít">
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((o) => {
                const len = categories[o.catIndex].photos.length;
                return { ...o, photoIndex: (o.photoIndex - 1 + len) % len };
              });
            }}
            aria-label="Předchozí"
          >
            ‹
          </button>

          <figure
            className="lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img className="lightbox-img" src={current.src} alt={current.alt} />
            <figcaption className="lightbox-caption">
              {categories[open.catIndex].title} • {open.photoIndex + 1}/
              {categories[open.catIndex].photos.length}
            </figcaption>
          </figure>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((o) => {
                const len = categories[o.catIndex].photos.length;
                return { ...o, photoIndex: (o.photoIndex + 1) % len };
              });
            }}
            aria-label="Další"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;