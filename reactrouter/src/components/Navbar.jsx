// Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>| <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="/show-text">Show Text</Link> |{" "}
      <Link to="/toggle-paragraph">Toggle Paragraph</Link> |{" "}
      <Link to="/light-dark">Light/Dark Mode</Link> |{" "}
      <Link to="/students/Arbresha">Arbresha</Link> |{" "}
      <Link to="/students/Ali">Ali</Link>
      <Link to="/loginform">Login</Link>
    </nav>
  );
}

export default Navbar;
