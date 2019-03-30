import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';
import { logout } from '../Login/actions';
import NoUserFound from '../NoUserFound';

const Index = ({ user, dispatch }) => {
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  if (!user) {
    return <NoUserFound />;
  }

  return (
    <div className="container">
      <h1>
        This is your main page, &nbsp;
        {user.username}
      </h1>
      <a href="/api/logout" onClick={handleLogout}>
        Logout
      </a>
      <br />
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <br />
    </div>
  );
};

Index.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(Object)
};

Index.defaultProps = {
  user: null
};

export default connect(state => state.auth)(Index);
