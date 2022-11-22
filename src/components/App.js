import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import "../styles/App.css";
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div id="main">
      <span>{state}</span>
      <button onClick={() => dispatch("inc")}>Add</button>
      <button onClick={() => dispatch("dec")}>Sub</button>
    </div>
  );
};

export default App;
