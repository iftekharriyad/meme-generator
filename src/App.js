import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'

import './App.css';

function App() {
  return (
      <div>
        <Header/>
        <MemeGenerator/>
      </div>
  );
}

export default App;
