const increment = count => {
  return dispatch => {
    dispatch({
      type: 'INCREMENT',
      count
    });
  };
};

const decrement = count => {
  return dispatch => {
    dispatch({
      type: 'DECREMENT',
      count
    });
  };
};

export { increment };
export { decrement };
