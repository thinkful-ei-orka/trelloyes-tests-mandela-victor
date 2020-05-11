import React from 'react';
// import Card from './Card';
import STORE from './store';
import List from './List';

import './App.css';

function App() {
  const lists = STORE.lists.map(list => (
    <List key={list.id} header={list.header} cards={list.cardIds.map(id => STORE.allCards[id])} />
  ))
  return (
    <main className="App">
      <header>
        <h1>Trelloyes</h1>
        <div className="App-list">
          {lists}
        </div>
      </header>
    </main>
  );
}

export default App;
