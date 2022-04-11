import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { exemplo } = this.props;
    return (
      exemplo
    );
  }
}

Form.propTypes = {
  exemplo: PropTypes.string.isRequired,
};

export default Form;
