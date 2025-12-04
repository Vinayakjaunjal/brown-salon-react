import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/hero-banner-interior.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero-parallax d-flex align-items-center text-center text-light"
    >
      <img
        src={heroImg}
        alt="Brown Hair Salon Interior"
        className="hero-bg"
        loading="eager"
        fetchpriority="high"
      />

      <div className="hero-overlay"></div>

      <div className="container position-relative">
        <p className="lead mb-4">
          Welcome to <span className="text-gold">Brown Hair</span> – The Unisex
          Salon where beauty meets luxury.
        </p>

        <a href="#appointment" className="btn btn-gold btn-sm shadow">
          Book Appointment
        </a>
      </div>
    </section>
  );
}

export default Hero;
