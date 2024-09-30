import React, { useState } from "react";
import "./TracksForm.css";

const trackOptions = [
  "Cyber Security",
  "UI/UX Design",
  "Web Development",
  "Mobile Apps Development",
  "Cloud Engineering",
  "Power Platform",
];

function TracksForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    year: "",
    track: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted: ", formData);
  };

  return (
    <div className="tracks-form-container">
      <h3>Register for Your Preferred Track</h3>
      <form className="tracks-form" onSubmit={handleSubmit}>
        <div className="form-group-wrapper">
          <div className="form-group">
            <label htmlFor="full-name" className="form-group-label">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-group-input"
              placeholder="Full Name e.g. John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-group-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-group-input"
              placeholder="Email Address e.g. example@gmail.com"
              required
            />
          </div>
        </div>
        <div className="form-group-wrapper">
          <div className="form-group">
            <label htmlFor="course" className="form-group-label">
              Course of Study
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="form-group-input"
              placeholder="Course of Study"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year" className="form-group-label">
              Year of Study
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="form-group-input"
              placeholder="Year of Study"
              required
              min="1"
              max="4"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="track" className="form-group-label">
            Select Track
          </label>
          <select
            id="track"
            name="track"
            value={formData.track}
            onChange={handleChange}
            className="form-group-input"
            required
          >
            <option value="">-- Select a Track --</option>
            {trackOptions.map((track, index) => (
              <option key={index} value={track}>
                {track}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TracksForm;
