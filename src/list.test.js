import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

it('renders as expected', () => {
     const div = document.createElement('div');
     ReactDOM.render(<List cards={[]} />, div);
     ReactDOM.unmountComponentAtNode(div);

});

it('renders same as snapshot', () => {
     const tree = renderer
     .create(<List className='List' name='list name' cards={[]} />)
     .toJSON();
     expect(tree).toMatchSnapshot();
}
);