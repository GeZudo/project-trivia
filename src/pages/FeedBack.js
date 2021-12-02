import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearStore } from '../actions';
import Header from '../components/Header';
import FeedBackContent from '../components/FeedBackContent';

class FeedBack extends React.Component {
  constructor() {
    super();
    this.playAgain = this.playAgain.bind(this);
    this.ranking = this.ranking.bind(this);
  }

  playAgain() {
    const { history, clearScore } = this.props;
    clearScore();
    history.push('/');
  }

  ranking() {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    return (
      <div>
        <Header />
        <div className="feedback">
          <FeedBackContent />
          <div className="feedback-buttons">
            <button
              type="button"
              onClick={ this.playAgain }
            >
              Play Again
            </button>
            <button
              type="button"
              onClick={ this.ranking }
            >
              Ranking
            </button>
          </div>
        </div>
      </div>);
  }
}

FeedBack.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  clearScore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clearScore: () => dispatch(clearStore()),
});

export default connect(null, mapDispatchToProps)(FeedBack);
