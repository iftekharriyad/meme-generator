import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
      <div>
        <Header/>
        <MemeGenerator/>
        <Footer/>
      </div>
  );
}

export default App;
