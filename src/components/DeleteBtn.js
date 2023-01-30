import React from 'react';
import PropTypes from 'prop-types';

class Delete extends React.Component {
  render() {
    const { onClickDeleteCard, name } = this.props;
    return (
      <button
        data-testid="delete-button"
        onClick={ onClickDeleteCard }
        name={ name }
      >
        Excluir
      </button>
    );
  }
}

Delete.propTypes = {
  onClickDeleteCard: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Delete;
