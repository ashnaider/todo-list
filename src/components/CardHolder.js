import React from 'react';

import Card from './Card';

class CardHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      total_cards: 0,
      new_card_name: "",
    };

    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.handleNewCardNameChange = this.handleNewCardNameChange.bind(this);
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
      if (state.new_card_name === "") {
        return;
      }
      let newCards = state.cards;
      newCards.push(<Card 
                      card_id={this.state.cards.length}
                      deleteCard={this.deleteCard}
                      card_name={state.new_card_name}
                      />);
      return {
        cards: newCards,
        total_cards: ++state.total_cards,
        new_card_name: ""
      };
    });
  }

  handleNewCardNameChange(event) {
    this.setState({new_card_name: event.target.value}); 
  }

  render() {
    return (
      <div>
      <h2>Your cards!</h2>
      <h3>Total cards: {this.state.total_cards}</h3>
      <hr />
      <div>
        <label>Add new card:
          <input 
            type="text"
            onChange={this.handleNewCardNameChange}
            value={this.state.new_card_name}
          />
        </label>
        <button onClick={this.addCard}>Done</button>
      </div>
      <br /> 
      <br />
      <div>{this.state.cards}</div>
      </div>
    );
  }
}

export default CardHolder;