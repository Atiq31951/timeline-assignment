const initialState = {
  value: 0,
};

const counterReducer2 = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT1":
      return {
        ...state,
        value: state.value + payload,
      };

    case "DECREMENT1":
      return {
        ...state,
        value: state.value - payload,
      };
    default:
      return state;
  }
};

export default counterReducer2;
