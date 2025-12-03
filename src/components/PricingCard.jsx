import "../styles/PricingCard.css";

const PricingCard = ({ title, description, price, isPremium }) => {
  return (
    <div className={`pricing-card ${isPremium ? "premium-card" : ""}`}>
      <h3>{title}</h3>
      <p className="desc">{description}</p>

      <h4 className="price">₹{price}</h4>

      <button className="book-btn">BOOK NOW</button>
    </div>
  );
};

export default PricingCard;
