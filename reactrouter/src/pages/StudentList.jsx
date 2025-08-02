import { useNavigate } from "react-router-dom";

function StudentList() {
  const navigate = useNavigate();
  const students = ["Arbresha", "Elira", "Dren", "Ardi"];

  const goToDetails = (name) => {
    navigate(`/students/${name}`); // kalon në faqen me param
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <button key={student} onClick={() => goToDetails(student)}>
          View {student}'s Page
        </button>
      ))}
    </div>
  );
}

export default StudentList;
