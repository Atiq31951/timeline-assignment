export const incerement1 = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

export const decerement1 = (value) => {
  return {
    type: "DECREMENT",
    payload: value,
  };
};
