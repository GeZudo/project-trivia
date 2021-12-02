/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import React from 'react';

class Answers extends React.Component {
  render() {
    const { answer, color, click, handleClick } = this.props;
    return (
      <button
        onClick={ click ? null : handleClick }
        type="button"
        value={ color }
        disabled={ click }
        name={ answer }
        className={ click ? color : null }
        dangerouslySetInnerHTML={ { __html: answer } }
      />
    );
  }
}

Answers.propTypes = {
  answer: PropTypes.string.isRequired,
  click: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Answers;
