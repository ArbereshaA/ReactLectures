import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin") {
      navigate("/counter");
    } else {
      alert("Wrong username");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
