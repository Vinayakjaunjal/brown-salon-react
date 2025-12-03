import "../styles/MapSection.css";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?width=600&height=350&hl=en&q=brown%20hair%20the%20unisex%20saloon&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
