import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    const checkSuperTrybeTrunfo = (
      <label className="super-bazinga" htmlFor="super">
        <input
          id="super"
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        BAZINGA !!!
      </label>
    );

    return (
      <div className="form-container">

        <h3>ADICIONE NOVA CARTA</h3>

        <label className="input-form" htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
          <hr />
        </label>

        <label className="input-form" htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            id="description"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          <hr />
        </label>

        <label className="attr" htmlFor="attr1">
          QI
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label className="attr" htmlFor="attr2">
          Força
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label className="attr" htmlFor="attr3">
          Popularidade
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        {/* <p>Pontos restantes = 000</p> */}

        <label className="form-img" htmlFor="img">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="img"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            placeholder="URL image address"
          />
        </label>

        <label className="input-form" htmlFor="rare">
          Raridade
          <select
            id="rare"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>selecione</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        {/* <p>Total de pontos = 000</p> */}

        <div className="form-super-btn-container">
          <div>
            {hasTrunfo === true ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : checkSuperTrybeTrunfo}
          </div>

          <button
            type="button"
            data-testid="save-button"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </div>

      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
