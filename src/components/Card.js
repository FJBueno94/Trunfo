import React from 'react';
import PropTypes from 'prop-types';

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
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <h2>Pré visualização</h2>
        <div>
          <h3 data-testid="name-card" id="cardTitle">{ cardName }</h3>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{`Atributo 1 ............${cardAttr1}`}</p>
          <p data-testid="attr2-card">{`Atributo 1 ............${cardAttr2}`}</p>
          <p data-testid="attr3-card">{`Atributo 1 ............${cardAttr3}`}</p>
          <h4 data-testid="rare-card">{ cardRare }</h4>
          {
            cardTrunfo ? <h5 data-testid="trunfo-card">Super Trunfo</h5> : ''
          }
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
