import { useState } from "react";
import "../styles/Gallery.css";

const images = [
  "/src/assets/Gallary_mens-1.jpg",
  "/src/assets/Gallary_ladie-1.jpg",
  "/src/assets/Gallary_mens-2.jpg",
  "/src/assets/Gallary_ladie-2.jpg",
  "/src/assets/Gallary_mens-3.jpg",
  "/src/assets/Gallary_ladie-3.jpg",
  "/src/assets/Gallary_mens-4.jpg",
  "/src/assets/Gallary_ladie-4.jpg",
  "/src/assets/Gallary_mens-5.jpg",
  "/src/assets/Gallary_ladie-5.jpg",
  "/src/assets/Gallary_mens-6.jpg",
  "/src/assets/Gallary_ladie-6.jpg",
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-slider">
        <div className="gallery-track">
          {images.map((src, i) => (
            <div className="gallery-item" key={i}>
              <img
                src={src}
                alt=""
                onClick={() => setLightbox(src)}
                className="clickable"
              />
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
