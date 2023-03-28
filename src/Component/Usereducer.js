import React from "react";
import { useReducer } from "react";

function Usereducer() {
  const initialstate = 0;

  function reducer(state, action) {
    if (action.type === "Increment") {
      return state + 1;
    } else if (action.type === "Decrement") {
      return state - 1;
    }
    return state;
  }
  //const [count, setcount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </>
  );
}

export default Usereducer;
