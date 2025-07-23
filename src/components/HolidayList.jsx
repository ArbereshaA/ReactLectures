// --------------------------------------------------
// 📌 Instructions:
// 1. Fetch US public holidays for 2025 from: https://date.nager.at/api/v3/PublicHolidays/2025/US
// 2. Display name and date of each holiday
// 3. Show loading state
// 4. Display error if something goes wrong
// --------------------------------------------------

import React, { useEffect, useState } from "react";

function HolidayList() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://date.nager.at/api/v3/PublicHolidays/2025/US")
      .then((res) => res.json())
      .then((data) => {
        setHolidays(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not fetch holidays");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Public Holidays - USA 2025</h2>
      {loading && <p>Loading holidays...</p>}
      {error && <p>{error}</p>}
      <ul>
        {holidays.map((h) => (
          <li key={h.date}>
            <strong>{h.date}</strong> - {h.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HolidayList;
