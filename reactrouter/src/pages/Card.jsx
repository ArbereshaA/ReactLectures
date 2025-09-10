export default function Card(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "250px",
        borderRadius: "8px",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
