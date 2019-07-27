import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SessionContainer from './components/SessionContainer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SessionContainer />
      <Footer />
    </div>
  );
}

export default App;
