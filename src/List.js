import React from 'react';
import Card from './Card';


export default function list (props)  {
    const cards = props.cards.map(card => (
        <Card key={card.id} title={card.title} content={card.content} />
    ));
    
    return (
            <section className="list">
                <header className="list-header">{props.header}</header>
                <div className="list-cards">
                {cards}
                </div>
            </section>
        );
}

