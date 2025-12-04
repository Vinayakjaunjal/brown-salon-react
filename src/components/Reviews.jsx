import { useState, useEffect } from "react";
import "../styles/Reviews.css";
import review1 from "../assets/Review-ashish.jpg";
import review2 from "../assets/Review-nikita.jpg";
import review3 from "../assets/Review-dhanraj.jpg";
import review4 from "../assets/Review-swayam.jpg";
import review5 from "../assets/Review-damini.jpg";

const reviews = [
  {
    name: "Ashish Bharde",
    review:
      "Amazing salon experience! The stylists are very professional and friendly. My haircut was perfect and the ambiance is premium.",
    rating: 5,
    image: review1,
  },
  {
    name: "Nikita Chambhare",
    review: "Very friendly staff and great service. Highly recommended!",
    rating: 4,
    image: review2,
  },
  {
    name: "Dhanraj Tikhat",
    review: "I loved the hair spa. Very relaxing environment.",
    rating: 5,
    image: review3,
  },
  {
    name: "Swayam Moon",
    review: "I loved the hair spa. Very relaxing environment.",
    rating: 5,
    image: review4,
  },
  {
    name: "Damini Dahake",
    review: "I loved the hair spa. Very relaxing environment.",
    rating: 5,
    image: review5,
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[index];

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Our Clients Say</h2>

      <div className="review-slider">
        <button className="arrow-btn left" onClick={prevReview}>
          ❮
        </button>
        <div className="review-card">
          <div className="profile-img-wrapper">
            <img src={current.image} alt={current.name} />
          </div>

          <h3 className="review-name">{current.name}</h3>
          <p className="review-text">"{current.review}"</p>

          <div className="stars">
            {Array(current.rating)
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
        </div>
        <button className="arrow-btn right" onClick={nextReview}>
          ❯
        </button>
      </div>
      <div className="dots-wrapper">
        {reviews.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
