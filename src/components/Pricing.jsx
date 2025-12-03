import { useState } from "react";
import pricingData from "../data/pricingData";
import PricingCard from "./PricingCard";
import "../styles/Pricing.css";

const Pricing = () => {
  const categories = [
    "All Pricing",
    "Gents",
    "Ladies",
    "Skin Treatment",
    "Hair Treatment",
    "Premium Offers",
  ];

  const keyMap = {
    Gents: "gents",
    Ladies: "ladies",
    "Skin Treatment": "skin",
    "Hair Treatment": "hair",
    "Premium Offers": "premium",
  };

  const [active, setActive] = useState("All Pricing");

  const allPricing = Object.values(pricingData).flat();

  const cardsToShow =
    active === "All Pricing" ? allPricing : pricingData[keyMap[active]] || [];

  return (
    <section id="pricing" className="pricing-section">
      <h2 className="pricing-title">Our Pricing</h2>

      <div className="pricing-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pricing-grid">
        {cardsToShow.map((item, index) => (
          <PricingCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            isPremium={active === "Premium Offers"}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
