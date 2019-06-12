import React from 'react';
import Header from './Header';
import RecordsDisplay from './RecordsDisplay'
import Logger from './Logger';
import Tracker from './Tracker';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RecordsDisplay />
      <Logger />
      <Tracker />
      <Footer />
    </div>
  );
}

export default App;
