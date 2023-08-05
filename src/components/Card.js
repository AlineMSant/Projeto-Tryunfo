import React from 'react';
import PropTypes from 'prop-types';
import Attr from './Attr';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="card-out-container">
        <div className="card-mid-container">
          <div className="card-container">

            <p className="card-name" data-testid="name-card">
              { cardName }
            </p>
            <div className="img-card-container">
              <img data-testid="image-card" src={ cardImage } alt={ cardName } />
            </div>
            <p className="card-description" data-testid="description-card">
              { cardDescription }
            </p>

            <div className="attr-card-container">
              <Attr
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
              />

            </div>

            <div className="card-rare-trunfo-container">
              <p className="card-rare" data-testid="rare-card">
                { cardRare }
              </p>
              <div>
                {cardTrunfo === true && (
                  <p className="super-bazinga" data-testid="trunfo-card">BAZINGA !!!</p>)}
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
