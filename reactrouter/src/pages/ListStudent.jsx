function ListStudent(props) {
  return (
    <div>
      <h2>Student Names</h2>
      <ul>
        {props.names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListStudent;
