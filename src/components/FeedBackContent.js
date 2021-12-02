import React from 'react';

class FeedBackContent extends React.Component {
  constructor() {
    super();
    this.state = {
      assertions: 0,
      score: 0,
    };
    this.getAssertions = this.getAssertions.bind(this);
  }

  componentDidMount() {
    this.getAssertions();
  }

  getAssertions() {
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    this.setState({
      assertions,
      score,
    });
  }

  render() {
    const { assertions, score } = this.state;
    const NUMBER = 3;
    return (
      <>
        <span>
          { assertions < NUMBER ? 'Could be better...' : 'Nice job!'}
        </span>
        <div>
          { score }
          {' '}
          Points
        </div>
        <div>
          { assertions }
          {' '}
          Correct Answers
        </div>
      </>
    );
  }
}

export default FeedBackContent;
