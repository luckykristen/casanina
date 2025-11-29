import img1 from "../assets/images/pic_high1.jpg"
import img2 from "../assets/images/pic_high2.jpg"
import img3 from "../assets/images/pic_high3.jpg"

function Gallery() {
    return (
        <section className="section gallery">
            <h2>Gallery</h2>

            <div className="gallery-grid">
                <img src={img1} alt="Casa Nina terrace" />
                <img src={img2} alt="Sea view near Casa Nina" />
                <img src={img3} alt="Sardinia coast" />
            </div>
        </section>
    );
}

export default Gallery;