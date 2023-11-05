
import { useState } from "react";
import { evaluate } from "mathjs";
import Input from "./components/input";
import Button from "./components/button";
import * as math from "mathjs";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const getSymbol = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const clearData = () => {
    setText("");
    setResult("");
  };

  const getResult = () => {
    const Input = text.join("");
    setResult(math.evaluate(Input));
  };
  return (
    <div className="bg-container">
      <div className="calculator-inside-conatiner">
        <Input text={text} result={result} />
        <div className="button-items">
          <Button symbol="c" onClickButton={clearData} />
          <Button symbol="+" onClickButton={getSymbol} />
          <Button symbol="%" onClickButton={getSymbol} />
          <Button symbol="/" onClickButton={getSymbol} />
        </div>
        <div className="button-items">
          <Button symbol="7" onClickButton={getSymbol} />
          <Button symbol="8" onClickButton={getSymbol} />
          <Button symbol="9" onClickButton={getSymbol} />
          <Button symbol="*" onClickButton={getSymbol} />
        </div>
        <div className="button-items">
          <Button symbol="4" onClickButton={getSymbol} />
          <Button symbol="5" onClickButton={getSymbol} />
          <Button symbol="6" onClickButton={getSymbol} />
          <Button symbol="-" onClickButton={getSymbol} />
        </div>
        <div className="button-items">
          <Button symbol="1" onClickButton={getSymbol} />
          <Button symbol="2" onClickButton={getSymbol} />
          <Button symbol="3" onClickButton={getSymbol} />
          <Button symbol="+" onClickButton={getSymbol} />
        </div>
        <div className="button-items">
          <Button symbol="0" onClickButton={getSymbol} />
          <Button symbol="." onClickButton={getSymbol} />
          <Button symbol="^" onClickButton={getSymbol} />
          <Button symbol="=" onClickButton={getResult} />
        </div>
      </div>
    </div>
  );
};

export default App;