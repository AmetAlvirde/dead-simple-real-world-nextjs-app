import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { increment, decrement } from './actions';

const Counter = ({ count, dispatch }) => {
  const dispatchIncrement = () => {
    dispatch(increment(count));
  };

  const dispatchDecrement = () => {
    dispatch(decrement(count));
  };
  return (
    <>
      <h1>{count}</h1>
      <Button onClick={dispatchDecrement} variant="contained" color="primary">
        -
      </Button>
      <Button onClick={dispatchIncrement} variant="contained" color="secondary">
        +
      </Button>
    </>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state.counter;
};

export default connect(mapStateToProps)(Counter);
