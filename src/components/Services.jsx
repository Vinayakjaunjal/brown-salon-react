import React from "react";
import ServiceCard from "./ServiceCard";
import "../styles/Services.css";

const servicesList = [
  {
    icon: "bi bi-scissors",
    title: "Hair Styling",
    desc: "Trendy, classic, and custom styles for every occasion",
  },
  {
    icon: "bi bi-person-lines-fill",
    title: "Beard Grooming",
    desc: "Precision trims, shaping, and nourishing treatments",
  },
  {
    icon: "bi bi-brush",
    title: "Hair Coloring",
    desc: "Vibrant shades, highlights, and touch-ups for all hair types",
  },
  {
    icon: "bi bi-droplet-half",
    title: "Hair Spa",
    desc: "Deep nourishment and hydration for healthy, shiny hair",
  },
  {
    icon: "bi bi-heart-pulse",
    title: "Skin Care",
    desc: "Glow facials, cleanup, and rejuvenating skin treatments",
  },
  {
    icon: "bi bi-sun",
    title: "Makeup & Styling",
    desc: "Bridal, party, and occasion-ready makeup looks",
  },
  {
    icon: "bi bi-gem",
    title: "Premium Packages",
    desc: "All-in-one luxury salon experiences with special offers",
  },
  {
    icon: "bi bi-clock-history",
    title: "Quick Grooming",
    desc: "Express salon treatments for busy schedules",
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>

        <div className="services-grid">
          {servicesList.map((item, i) => (
            <ServiceCard
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
