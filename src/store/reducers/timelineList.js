import {
  SET_STATUS_TIMELINE_LIST,
  SET_TIMELINE_LIST_DATA,
  ADD_NEW_TIMELINE,
} from "../actions/timelines";

const initialState = {
  loading: false,
  data: [],
};

const timelineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_STATUS_TIMELINE_LIST:
      return {
        ...state,
        loading: payload.loading,
      };

    case SET_TIMELINE_LIST_DATA:
      return {
        ...payload,
      };
    case ADD_NEW_TIMELINE:
      console.log("Payload", payload);
      return {
        ...state,
        data: [{ ...payload.newData }, ...state.data],
      };
    default:
      return state;
  }
};

export default timelineReducer;
