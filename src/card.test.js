import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

it('renders', () => {
     const div = document.createElement('div');
     ReactDOM.render(<Card />, div);
     ReactDOM.unmountComponentAtNode(div);
})

it('renders', () => {
     const tree = renderer
     .create(<Card className='Card' name='card name'/>)
     .toJSON();
     expect(tree).toMatchSnapshot();
})