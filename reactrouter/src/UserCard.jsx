import React from "react";

// Object prop
function UserCard({ user }) {
  return (
    <div>
      <h3>User Information</h3>
      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default UserCard;
