import React from 'react';

import Card from './Card';

class CardHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      total_cards: 0,
    };

    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard(card_id) {
    this.setState(function(state) {
      delete state.cards[card_id];
      return {
        cards: state.cards,
        total_cards: --state.total_cards,
      };
    });
  }

  addCard() {
    this.setState(function(state) {
      let newCards = state.cards;
      newCards.push(<Card 
                      card_id={this.state.cards.length}
                      deleteCard={this.deleteCard}
                      />);
      return {
        cards: newCards,
        total_cards: ++state.total_cards,
      };
    });
  }

  render() {
    return (
      <div>
      <h2>Your cards!</h2>
      <h3>Total cards: {this.state.total_cards}</h3>
      <hr />
      <button onClick={this.addCard}>Add new Card</button>
      <br /> 
      <br />
      <div>{this.state.cards}</div>
      </div>
    );
  }
}

export default CardHolder;