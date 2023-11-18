import { combineReducers } from "redux";

import counterReducer1 from "./counter1";
import counterReducer2 from "./counter2";

const allReducers = combineReducers({
  counter1: counterReducer1,
  counter2: counterReducer2,
});

export default allReducers;
