const counterReducer = (state, action) => {
  if (action == "inc") {
    return state + 1;
  } else {
    return state - 1;
  }
};

export { counterReducer };
