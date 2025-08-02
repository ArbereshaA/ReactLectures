import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thanks, ${email}!`);
    navigate("/");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
