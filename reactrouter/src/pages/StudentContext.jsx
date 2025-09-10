import { createContext, useState } from "react";

// Create Context
export const StudentContext = createContext();

// Provider Component
export function StudentProvider({ children }) {
  const [student, setStudent] = useState({ name: "No Name", grade: "N/A" });

  const updateStudent = (newName, newGrade) => {
    setStudent({ name: newName, grade: newGrade });
  };

  return (
    <StudentContext.Provider value={{ student, updateStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

// Create a StudentContext with name, and grade.

// Create StudentProvider with state and a function to update info.

// One component (StudentProfile) should show student info.

// Another component (EditProfile) should have inputs to update name and grade.

// Hint: Use useContext inside both components so they share the same data.
