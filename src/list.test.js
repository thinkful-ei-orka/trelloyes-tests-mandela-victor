import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
// import STORE from './store';
import Card from './Card';

it('renders as expected', () => {
     const div = document.createElement('div');
     function list(props) {
          const cards = props.cards.map(card => (
              <Card key={card.id} title={card.title} content={card.content} />
          ));
     ReactDOM.render(<List />, div);
     ReactDOM.unmountComponentAtNode(div);
}
});

it('renders same as snapshot', () => {
     function list(props) {
          const cards = props.cards.map(card => (
              <Card key={card.id} title={card.title} content={card.content} />
          ));
     const tree = renderer
     .create(<List className='List' name='list name'/>)
     .toJSON();
     expect(tree).toMatchSnapshot();
          }
});