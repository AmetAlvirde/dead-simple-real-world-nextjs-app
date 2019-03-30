import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import Counter from '../Counter';

const Container = styled.div`
  font-size: 15px;
`;

const Profile = ({ user }) => {
  return (
    <Container>
      <h1>
        This is your profile,
        {user.username}
      </h1>
      <h2>got your username consuming the Redux store.</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        And this counter is an independent component also consuming the redux
        store
      </h2>
      <Counter />
    </Container>
  );
};

const mapStateToProps = state => {
  return state.auth;
};

Profile.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired
};

export default connect(mapStateToProps)(Profile);

// mapStateToProps could be an inline function as the first param of connect
// in fact, that's a really common practice, it would be the same to delete
// our mapStateToProps function and write our export like this:
// export default connect(state => state.auth)(Profile);
