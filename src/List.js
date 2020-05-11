import React from 'react';
import Card from './Card';

import './List.css';


export default function list (props)  {
    const cards = props.cards.map(card => (
        <Card key={card.id} title={card.title} content={card.content} />
    ));
    
    return (
            <section className="List">
                <header className="List-header">{props.header}</header>
                <div className="List-cards">
                {cards}
                </div>
            </section>
        );
}

