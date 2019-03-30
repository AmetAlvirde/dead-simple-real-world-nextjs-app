import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';
import { login } from './actions';

const Login = ({ router, dispatch }) => {
  const initialFormFields = { username: '', password: '' };
  const { values, handleChange, handleSubmit } = useForm(() => {
    const { query } = router;
    const next = query.next || '/';
    dispatch(
      login({ username: values.username, password: values.password }),
      next
    );
  }, initialFormFields);

  return (
    <div className="container">
      <div className="box">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="username"
            name="username"
            type="text"
            margin="normal"
            onChange={handleChange}
            value={values.username}
            variant="outlined"
          />
          <TextField
            id="password"
            label="password"
            name="password"
            type="password"
            margin="normal"
            value={values.password}
            onChange={handleChange}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Login"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  router: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default withRouter(connect(mapStateToProps)(Login));
