








// Create a component called StudentList.

// Inside it, create an array of student objects: each with id, name, and grade.

// Use map() to display each student inside a card (<div>).

// Use the key prop based on id.













function StudentList() {
  const students = [
    { id: 1, name: "Arta", grade: "A" },
    { id: 2, name: "Blerim", grade: "B" },
    { id: 3, name: "Drita", grade: "A+" },
  ];

  return (
    <div>
      <h2>Student Grades</h2>
      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "8px",
          }}
        >
          <p>
            <strong>Name:</strong> {student.name}
          </p>
          <p>
            <strong>Grade:</strong> {student.grade}
          </p>
        </div>
      ))}
    </div>
  );
}
export default StudentList;
