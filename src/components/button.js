import "./button.css";

const Button = ({ onClickButton,symbol }) => {
  return <div onClick={()=> onClickButton(symbol)}className="button-style">{symbol}</div>;
};
export default Button;