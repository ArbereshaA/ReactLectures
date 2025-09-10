import { useContext } from "react";
import { StudentContext } from "./StudentContext";

export default function StudentProfile() {
  const { student } = useContext(StudentContext);

  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}
