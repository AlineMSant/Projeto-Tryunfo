import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

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
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.disabledBtn = this.disabledBtn.bind(this);
    this.checkEmptyInput = this.checkEmptyInput.bind(this);
  }

  onInputChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    }, () => this.disabledBtn());
  }

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
      isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
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
    );
  }
}

export default App;
