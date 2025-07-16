import { useState } from "react";
import emailjs from "@emailjs/browser";

function FormFeedbackOneState() {
  // 1. Use only one useState to store all 3 values (product, rating, feedback).
  // 2. Use name="" in each input so we can update the correct field.
  // 3. Create one function to handle all input changes.
  // 4. Use onChange to update the formData object.
  // 5. When the form is submitted, prevent page refresh.
  // 6. Send formData with emailjs.send(...)
  // 7. After success, clear all fields and show alert.

  const [formData, setFormData] = useState({
    product: "",
    rating: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY").then(
      () => {
        alert("Feedback sent successfully!");
        setFormData({ product: "", rating: "", feedback: "" });
      },
      () => {
        alert("Failed to send feedback. Please try again.");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Product Feedback (One State Object)</h2>

      <label>Product Name:</label>
      <br />
      <input
        type="text"
        name="product"
        value={formData.product}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <label>Rating:</label>
      <br />
      <select
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        required
      >
        <option value="">Select rating</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <br />
      <br />

      <label>Feedback:</label>
      <br />
      <textarea
        name="feedback"
        value={formData.feedback}
        onChange={handleChange}
        required
      />
      <br />
      <br />

      <button type="submit">Send Feedback</button>
    </form>
  );
}

export default FormFeedbackOneState;
