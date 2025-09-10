function Greeting(props) {
  return <h1>Hello, {props.name || "Guest"}!</h1>;
}
export default Greeting;
