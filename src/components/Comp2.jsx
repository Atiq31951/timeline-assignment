import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incerement1, decerement1 } from "../store/actions/counter1";

function Comp2() {
  const state = useSelector((state) => state);
  const { value } = state.counter1;
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(incerement1(1))}>Helllo 1</button>
    </div>
  );
}

export default Comp2;
