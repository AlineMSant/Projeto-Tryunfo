import React from 'react';
import PropTypes from 'prop-types';

class Attr extends React.Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.props;
    return (
      <div>
        <div>
          <p data-testid="attr1-card">
            QI
          </p>
          <span>{ cardAttr1 }</span>
        </div>
        <div>
          <p data-testid="attr2-card">
            Força
          </p>
          <span>{ cardAttr2 }</span>
        </div>
        <div>
          <p data-testid="attr3-card">
            Popularidade
          </p>
          <span>{ cardAttr3 }</span>
        </div>
      </div>
    );
  }
}

Attr.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};

export default Attr;
