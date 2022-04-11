import React from 'react';
// import PropTypes, { number } from 'prop-types';

class Form extends React.Component {
  render() {
    // const { exemplo } = this.props;
    return (
      <div>
        <h2>Adicione uma nova Carta</h2>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            id="name"
            name="name"
            placeholder="Nome da nova carta"
          />
          <br/>
        </label>
        <label htmlFor="description">
          Desccrição:
          <input
            type="textarea"
            data-testid="description-input"
            id="description"
            name="description"
            placeholder="Insira uma desccrição"
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
            // value="0"
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
            // value="0"
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
            // value="0"
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
            placeholder="URL da imagem"
          />
        </label>
        <br />
        <label htmlFor="raridade">
          Raridade:
          <select data-testid="rare-input" id="raridade" name="raridade">
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
          />
        </label>
        <br />
        <button type="button" data-testid="save-button" id="formButton">Salvar</button>
      </div>
    );
  }
}

// Form.propTypes = {
//   exemplo: PropTypes.string.isRequired,
// };

export default Form;
