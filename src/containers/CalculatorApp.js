import { useSelector, useDispatch } from 'react-redux';
import "./Calculator.css";
import {useState} from "react";

const CalculatorApp = () => {

  const сalculator = useSelector(state => state.value);
  const buttons = useSelector(state => state.btns);
  const dispatch = useDispatch();

  const displayNumbers = (value) => dispatch({ type: 'DISPLAY_NUMBERS', value });
  const countNumbers = (value) => dispatch({ type: 'COUNT_NUMBERS', value });
  const reset = () => dispatch({ type: 'RESET' });


  return (
    <div className="calculator">
      <input className="display"  value={сalculator} />
      <div className="numbers">
        {buttons.map((btn, key) => {
          if (btn === "C") {
            return (
              <button onClick={reset} key={key}>{btn}</button>
            )
          } else if (btn === "=") {
            return (
              <button className="equals" onClick={() => countNumbers(btn)} key={key}>{btn}</button>
            )
          } else {
            return (
              <button onClick={() => displayNumbers(btn)} key={key}>{btn}</button>
            )
          }
        })}
      </div>
    </div>

  )
}


export default CalculatorApp;


