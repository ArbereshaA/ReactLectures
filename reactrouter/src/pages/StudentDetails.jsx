import { useParams, useNavigate } from "react-router-dom";

function StudentDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <button onClick={() => navigate("/students")}>Go to Student List</button>
    </div>
  );
}

export default StudentDetails;
