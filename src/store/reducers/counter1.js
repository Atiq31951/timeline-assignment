const initialState = {
  value: 0,
};

const counterReducer1 = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + payload,
      };

    case "DECREMENT":
      return {
        ...state,
        value: state.value - payload,
      };
    default:
      return state;
  }
};

export default counterReducer1;
