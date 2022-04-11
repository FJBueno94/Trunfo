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
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <h2>Adicione uma nova Carta</h2>
          <label htmlFor="name">
            Nome:
            <input
              data-testid="name-input"
              type="text"
              id="name"
              name="name"
              value={ cardName }
              onChange={ onInputChange }
            />
            <br />
          </label>
          <label htmlFor="description">
            Desccrição:
            <input
              type="textarea"
              data-testid="description-input"
              id="description"
              name="description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="atr1">
            Atributo 1:
            <input
              type="number"
              data-testid="attr1-input"
              id="atr1"
              name="atr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="atr2">
            Atributo 2:
            <input
              type="number"
              data-testid="attr2-input"
              id="atr2"
              name="atr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="atr3">
            Atributo 3:
            <input
              type="number"
              data-testid="attr3-input"
              id="atr3"
              name="atr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="img">
            Imagem:
            <input
              data-testid="image-input"
              type="text"
              id="img"
              name="img"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="raridade">
            Raridade:
            <select
              data-testid="rare-input"
              id="raridade"
              name="raridade"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="checkbox">
            Super Trunfo:
            <input
              data-testid="trunfo-input"
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <button
            type="button"
            data-testid="save-button"
            id="formButton"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

// Form.propTypes = {
//   exemplo: PropTypes.string.isRequired,
// };

export default Form;
