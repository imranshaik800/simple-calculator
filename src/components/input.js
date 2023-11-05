import "./input.css";

const Input = ({ result, text }) => {
  return (
    <div className="input-element">
      <h1>{result}</h1>
      <p>{text}</p>
    </div>
  );
};
export default Input;