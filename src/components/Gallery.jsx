import './Gallery.css';
import img1 from "../assets/images/pic_high1.jpg"
import img2 from "../assets/images/pic_high2.jpg"
import img3 from "../assets/images/pic_high3.jpg"
import img4 from "../assets/images/pic_sea4.jpg"
import img5 from "../assets/images/pic_sea2.jpg"
import img6 from "../assets/images/pic_sea3.jpg"
import { useRef } from "react";
import { useReveal } from "../components/useReveal";

function Gallery() {
    const sectionRef = useRef(null);
    useReveal(sectionRef);
    return (
        <section className="section gallery alt" id='gallery' ref={sectionRef}>
            <h2>Galerie</h2>

            <div className='gallery-section'>
                <h3>Ubytování</h3>
                <div className='gallery-slider'>
                    <img src={img1} alt="Casa Nina terrace" />
                    <img src={img2} alt="Sea view near Casa Nina" />
                    <img src={img3} alt="Sardinia coast" />
                </div>
            </div>

             <div className='gallery-section'>
                <h3>Exteriér a terasa</h3>
                <div className='gallery-slider'>
                    <img src={img1} alt="Casa Nina terrace" />
                    <img src={img2} alt="Sea view near Casa Nina" />
                    <img src={img3} alt="Sardinia coast" />
                </div>
             </div>

            <div className='gallery-section'>
                <h3>Okolí a pláže</h3>
                <div className="gallery-slider">
                    <img src={img4} alt="Casa Nina terrace" />
                    <img src={img5} alt="Sea view near Casa Nina" />
                    <img src={img6} alt="Sardinia coast" />
                    <img src={img4} alt="Casa Nina terrace" />
                    <img src={img5} alt="Sea view near Casa Nina" />
                    <img src={img6} alt="Sardinia coast" />
                </div>
            </div>
        
        </section>
    );
}

export default Gallery;