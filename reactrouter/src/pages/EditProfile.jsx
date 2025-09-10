import { useContext, useState } from "react";
import { StudentContext } from "./StudentContext";

export default function EditProfile() {
  const { updateStudent } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");

  return (
    <div>
      <h2>Edit Profile</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Grade" onChange={(e) => setGrade(e.target.value)} />
      <button onClick={() => updateStudent(name, grade)}>Save</button>
    </div>
  );
}
