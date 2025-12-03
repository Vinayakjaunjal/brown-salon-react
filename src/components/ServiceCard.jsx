import React from "react";
import "../styles/ServiceCard.css";

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="service-card">
      <i className={`${icon} service-icon`} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
