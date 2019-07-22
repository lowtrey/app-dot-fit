import React from 'react';
import Header from './Header';
import PRContainer from './PRContainer';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
				<PRContainer />
				<Footer />
      </div>
    );
  }
}

export default App;
