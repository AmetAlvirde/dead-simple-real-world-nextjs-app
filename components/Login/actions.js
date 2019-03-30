import axios from 'axios';
import Router from 'next/router';
import BASE_URL from './constants';

const login = (payload, next = '/') => {
  return dispatch =>
    axios
      .post(`${BASE_URL}/api/Login`, payload)
      .then(resp => {
        dispatch({
          type: 'SET_USER',
          user: resp.data
        });
        Router.push(next);
      })
      .catch(err => err);
};

const logout = () => {
  return dispatch =>
    axios
      .get(`${BASE_URL}/api/logout`)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
        Router.push('/');
      })
      .catch(err => err);
};

const whoAmI = cookie => {
  return dispatch => {
    return axios
      .get(`${BASE_URL}/api/whoami`, {
        headers: {
          Accept: 'application/json',
          Cookie: cookie
        },
        withCredentials: true
      })
      .then(response => {
        let user = null;
        if (response.data) {
          user = response.data;
        }
        dispatch({
          type: 'SET_USER',
          user
        });
        return user;
      })
      .catch(() => {
        return null;
      });
  };
};

export { login, logout, whoAmI };
