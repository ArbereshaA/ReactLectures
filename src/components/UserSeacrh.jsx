// --------------------------------------------------
// 📌 Instructions:
// 1. Fetch all users from: https://jsonplaceholder.typicode.com/users
// 2. Let the user type a name in an input field
// 3. Show only users that match the input (case-insensitive)
// 4. Display results in cards with name and email
// --------------------------------------------------

import React, { useEffect, useState } from "react";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ marginTop: "1rem" }}>
        {filtered.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              margin: "0.5rem 0",
            }}
          >
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserSearch;
