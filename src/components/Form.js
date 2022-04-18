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
              name="cardName"
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
              name="cardDescription"
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
              name="cardAttr1"
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
              name="cardAttr2"
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
              name="cardAttr3"
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
              name="cardImage"
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
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          { hasTrunfo
            ? (
              'Você já tem um Super Trunfo em seu baralho')
            : (
              <label htmlFor="checkbox">
                Super Trunfo:
                <input
                  data-testid="trunfo-input"
                  type="checkbox"
                  id="checkbox"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            )}
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
