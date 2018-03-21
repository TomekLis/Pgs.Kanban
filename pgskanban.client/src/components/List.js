import React, { Component } from 'react';
import Card from './Card'

export default class List extends Component {
    render(){
        return(
            <div>
                {this.props.listName}
                {this.renderCards()}
                <button>Add card </button>
            </div>
        )
    }

    renderCards = () => {   
        return (
            this.props.cards.map(
                (card) => <Card cardName={card.name} />
            )
        )
    }
}