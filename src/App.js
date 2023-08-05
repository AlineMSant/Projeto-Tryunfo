import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Delete from './components/DeleteBtn';
import './index.css';
import logo from './images/logo.png'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      onSaveButtonClick: [],
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.disabledBtn = this.disabledBtn.bind(this);
    this.checkEmptyInput = this.checkEmptyInput.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.createCard = this.createCard.bind(this);
    this.onClickDeleteCard = this.onClickDeleteCard.bind(this);
  }

  // função para alterar state com evento de change no Form
  onInputChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    }, () => this.disabledBtn()); // função com callback para que faça a cada evento a verificação de habilitar e desabilitar botão de salvar
  }

  // função limpa os inputs de form quando clica no botão salvar. Utiliza a função createCard para salvar no state o novo objeto e possui lógica para alterar informação do checkbox caso já tenha salvo um card super trunfo
  onSaveButtonClick() {
    this.createCard();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
    });

    // logica abaixo se refere ao chackbox ficar desabilitado quando já tiver incluso o super trunfo em alguma card.
    const { cardTrunfo } = this.state;

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  // função deleta card quando clica em excluir e retorna o Super Trunfo no formulário caso exclua uma carta super trunfo
  onClickDeleteCard(event) {
    const { onSaveButtonClick } = this.state;

    onSaveButtonClick.forEach((card) => {
      if (card.name === event.target.name && card.trunfo === true) {
        this.setState({
          hasTrunfo: false,
        });
      }
    });

    this.setState((prevState) => ({
      onSaveButtonClick: prevState.onSaveButtonClick
        .filter((card) => card.name !== event.target.name),
    }));
  }

  // função salva no state onSabeButtonClick que é uma array um novo objeto. É utilizada na função onSaveButtonClick ser executada no evento de click .pesquisa sobre como dar push em state com array https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array
  createCard() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    this.setState((prevState) => ({
      onSaveButtonClick: [...prevState.onSaveButtonClick, { name: `${cardName}`,
        description: `${cardDescription}`,
        attr1: `${cardAttr1}`,
        attr2: `${cardAttr2}`,
        attr3: `${cardAttr3}`,
        image: `${cardImage}`,
        rare: `${cardRare}`,
        trunfo: cardTrunfo }],
    }));
  }

  // verifica critérios para habilitar ou desabilitar botão de salvar, utiliza na condição a função checkEmptyInput
  disabledBtn() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const maxSumAttr = 210;
    const maxAttr = 90;
    const zero = 0;
    const numAttr1 = parseInt(cardAttr1, 10);
    const numAttr2 = parseInt(cardAttr2, 10);
    const numAttr3 = parseInt(cardAttr3, 10);

    if (this.checkEmptyInput() || numAttr1 > maxAttr || numAttr2 > maxAttr
    || numAttr3 > maxAttr || numAttr1 < zero || numAttr2 < zero
    || numAttr3 < zero || numAttr1 + numAttr2 + numAttr3 > maxSumAttr) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  // utilizado para verificar dentro da função disableBtn parte da condicional.
  checkEmptyInput() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;

    let bool;

    if (cardName === '' || cardDescription === '' || cardImage === ''
        || cardAttr1 === '' || cardAttr2 === '' || cardAttr3 === ''
        || cardImage === '' || cardRare === '') {
      bool = true;
    } else {
      bool = false;
    }
    return bool;
  }

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
      isSaveButtonDisabled,
      onSaveButtonClick,
      hasTrunfo } = this.state;

    // div no return se refere a renderização de novos cards depois que salva

    return (
      <div className="app-container">
        <header>
          <img src={ logo } alt="logo" />
        </header>
        <div className="form-card-container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />

        </div>
        <div className="saved-cards-container">
          { onSaveButtonClick.map((obj, index) => (
            <div key={ index }>
              <Card
                key={ index }
                cardName={ obj.name }
                cardDescription={ obj.description }
                cardAttr1={ obj.attr1 }
                cardAttr2={ obj.attr2 }
                cardAttr3={ obj.attr3 }
                cardImage={ obj.image }
                cardRare={ obj.rare }
                cardTrunfo={ obj.trunfo }
              />
              <Delete onClickDeleteCard={ this.onClickDeleteCard } name={ obj.name } />
            </div>)) }

        </div>
      </div>
    );
  }
}

export default App;
