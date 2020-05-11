import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
        <div className="card">
            <h3 className="card-title">{this.props.title}</h3>
            <p className="card-content">{this.props.content}</p>
        </div>
        );
    }
}



