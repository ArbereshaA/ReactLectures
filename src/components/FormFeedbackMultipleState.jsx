import { useState } from "react";
import emailjs from "@emailjs/browser";

// 1. Create a separate useState for each field: product, rating, feedback.
// 2. Use value and onChange for each input to connect with its state.
// 3. When the form is submitted, stop page from refreshing.
// 4. Send the values using emailjs.send(...) as an object.
// 5. Show an alert if successful.
// 6. After sending, clear all input fields.

function FormFeedbackMultipleState() {
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "SERVICE_ID",
        "TEMPLATE_ID",
        { product, rating, feedback },
        "PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Feedback sent successfully!");
          setProduct("");
          setRating("");
          setFeedback("");
        },
        () => {
          alert("Failed to send feedback. Please try again.");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Product Feedback (Multiple States)</h2>

      <label>Product Name:</label>
      <br />
      <input
        type="text"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        required
      />
      <br />
      <br />

      <label>Rating:</label>
      <br />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
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
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <br />
      <br />

      <button type="submit">Send Feedback</button>
    </form>
  );
}

export default FormFeedbackMultipleState;
