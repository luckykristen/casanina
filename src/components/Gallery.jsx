import u1 from "../assets/images/pic_high1.jpg"
import u2 from "../assets/images/pic_high2.jpg"
import u3 from "../assets/images/pic_high3.jpg"
import e1 from "../assets/images/pic_sea4.jpg"
import e2 from "../assets/images/pic_sea2.jpg"
import e3 from "../assets/images/pic_sea3.jpg"
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
        ],
      },
      {
        title: "Exteriér a terasa",
        photos: [
          { src: e1, alt: "Exteriér – fotka 1" },
          { src: e2, alt: "Exteriér – fotka 2" },
          { src: e3, alt: "Exteriér – fotka 3" },
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