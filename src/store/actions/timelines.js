export const SET_STATUS_TIMELINE_LIST = "SET_STATUS_TIMELINE_LIST";
export const SET_TIMELINE_LIST_DATA = "SET_TIMELINE_LIST_DATA";
export const FETCH_TIMELINE_DATA = "FETCH_TIMELINE_DATA";
export const ADD_NEW_TIMELINE = "ADD_NEW_TIMELINE";
export const CREATE_NEW_ONE = "CREATE_NEW_ONE";

export const fetchTimelineLists = (payload) => {
  return {
    type: FETCH_TIMELINE_DATA,
    payload,
  };
};

export const addNewTimeline = (payload) => {
  return {
    type: CREATE_NEW_ONE,
    payload,
  };
};
