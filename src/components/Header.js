import PropTypes from 'prop-types';
import React from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, username, score } = this.props;
    return (
      <div className="header">
        <img
          src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
          alt="userAvatar"
        />
        <div className="header-info">
          <p>{ username }</p>
          <p className="points">
            Score:
            {' '}
            { score }
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.login.email,
  username: state.login.username,
  score: state.main.score,
});

export default connect(mapStateToProps)(Header);
