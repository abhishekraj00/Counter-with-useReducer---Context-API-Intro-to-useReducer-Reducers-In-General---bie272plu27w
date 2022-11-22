import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import "../styles/App.css";
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div id="main">
      <span id={"counter"} >{state}</span>
      <button id={"increment-btn"} onClick={() => dispatch("inc")}>Add</button>
      <button id={"decrement-btn"} onClick={() => dispatch("dec")}>Sub</button>
    </div>
  );
};

export default App;
