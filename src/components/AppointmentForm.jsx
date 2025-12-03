import { useState } from "react";
import "../styles/AppointmentForm.css";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    date: "",
    time: "",
    message: "",
  });

  const timeSlots = [];
  for (let hour = 9; hour <= 21; hour++) {
    ["00", "30"].forEach((min) => {
      const h = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? "PM" : "AM";
      timeSlots.push(`${h}:${min} ${ampm}`);
    });
  }
  timeSlots.push("10:00 PM");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment Booked Successfully!");
  };

  return (
    <section id="appointment" className="appointment-section">
      <h2>Book an Appointment</h2>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Select Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Service --</option>
            <option value="Haircut">Haircut</option>
            <option value="Haircut">Beard</option>
            <option value="Haircut">Hair Color</option>
            <option value="Haircut">Skin Treatment</option>
            <option value="Hair Spa">Hair Spa</option>
            <option value="Facial">Facial</option>
            <option value="Hair Spa">Premium Package</option>
            <option value="Beard Grooming">Beard Grooming</option>
            <option value="Makeup">Makeup</option>
          </select>
        </div>

        <div className="form-group">
          <label>Select Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Select Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose Time --</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group full">
          <label>Message (optional)</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className="submit-btn" type="submit">
          Book Appointment Now
        </button>
      </form>
    </section>
  );
}
