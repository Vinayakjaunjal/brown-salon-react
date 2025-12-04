import { useState } from "react";
import "../styles/Gallery.css";

import glry1 from "../assets/Gallary_mens-1.jpg";
import glry2 from "../assets/Gallary_ladie-1.jpg";
import glry3 from "../assets/Gallary_mens-2.jpg";
import glry4 from "../assets/Gallary_ladie-2.jpg";
import glry5 from "../assets/Gallary_mens-3.jpg";
import glry6 from "../assets/Gallary_ladie-3.jpg";
import glry7 from "../assets/Gallary_mens-4.jpg";
import glry8 from "../assets/Gallary_ladie-4.jpg";
import glry9 from "../assets/Gallary_mens-5.jpg";
import glry10 from "../assets/Gallary_ladie-5.jpg";
import glry11 from "../assets/Gallary_mens-6.jpg";
import glry12 from "../assets/Gallary_ladie-6.jpg";

const images = [
  glry1,
  glry2,
  glry3,
  glry4,
  glry5,
  glry6,
  glry7,
  glry8,
  glry9,
  glry10,
  glry11,
  glry12,
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
