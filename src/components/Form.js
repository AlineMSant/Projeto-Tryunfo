import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="form">

        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            id="description"
          />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
          />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
          />
        </label>

        <label htmlFor="img">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="img"
          />
        </label>

        <label htmlFor="rare">
          <select id="rare" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="super">
          <input id="super" type="checkbox" data-testid="trunfo-input" />
          Super Trybe Trunfo
        </label>

        <button type="button" data-testid="save-button">Salvar</button>
      </div>
    );
  }
}

export default Form;
