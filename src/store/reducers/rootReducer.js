import { combineReducers } from "redux";

import timelineListReducer from "./timelineList";

const allReducers = combineReducers({
  timeline: timelineListReducer,
});

export default allReducers;
