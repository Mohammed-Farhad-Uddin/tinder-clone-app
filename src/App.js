import React from 'react';
import './App.css';
import Header from './Header/Header';
import SwipeButtons from './SwipeButtons/SwipeButtons';
import TinderCards from './TinderCards/TinderCards';

function App() {
  return (
    <div className="App">

      {/* header */}
      <Header />

      {/* tinderCards */}
      <TinderCards />

      {/* swipeButton */}
      <SwipeButtons/>

    </div>
  );
}

export default App;
