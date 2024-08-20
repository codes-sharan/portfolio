import { useState } from "react";
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mvgpqylg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Thank you for your message!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="contact-form">
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
    </div>
    <button type="submit" className="submit-button">Submit</button>
  </form>
  


  );
}

export default ContactForm;
