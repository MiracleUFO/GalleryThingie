import React from 'react';
import Header from './components/Header.js';
import Modal from './components/Modal.js';
import ImageGrid from './components/ImageGrid.js';

function App() {
  return (

  	<div>
  	<Modal />
    <div id='wrapper'>
    <Header />
    <ImageGrid />
    </div>
    </div>
  );
}

export default App;
