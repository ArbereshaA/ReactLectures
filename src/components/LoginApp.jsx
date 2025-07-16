import { useState } from "react";

function LoginApp() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  // Handle input change
  function handleInputChange(event) {
    setUsername(event.target.value); // event object
  }

  // Handle login click
  function handleLogin() {
    if (username.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Please enter your name.");
    }
  }

  // Optional: handle logout
  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setShowSecret(false);
  }

  // Conditionally render the content
  if (!isLoggedIn) {
    return (
      <div style={styles.container}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={handleInputChange}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Welcome, {username}!</h2>

      {/* Toggle message using && operator */}
      <button onClick={() => setShowSecret(!showSecret)}>
        {showSecret ? "Hide Secret Message" : "Show Secret Message"}
      </button>

      {showSecret && <p>🎉 This is your secret message: React is awesome!</p>}

      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

// Simple inline styles
const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    fontFamily: "Arial",
  },
};

export default LoginApp;
