import { useState } from "react"
import "./index.css"
const Calculator = () => {
  const[inputValue, setInputvalue] = useState("");

  function display(value) {
    setInputvalue(inputValue + value);
  }

  function calculator() {
    var answers = eval(inputValue);
    setInputvalue(answers);
  }

  function clear() {
    setInputvalue("");
  }

  return (
    <form className="calculator" name="calc">
      <input type="text" class="value" value={inputValue}/>
      <span class="num clear" onClick={() => clear()}>
        C
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>+</span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span class="num equal" onClick={() => calculator()}>
        =
      </span>
    </form>
  );
}

export default Calculator
