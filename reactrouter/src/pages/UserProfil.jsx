import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function UserProfile() {
  const { user, login, logout } = useContext(AuthContext);

  if (user) {
    return (
      <div>
        <h2>Welcome, {user.name} 👋</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return <button onClick={() => login("Arbresha")}>Login</button>;
}
