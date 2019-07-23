import React from 'react';
import Header from './components/Header';
import PRContainer from './components/PRContainer';
import Footer from './components/Footer';
import './styles/App.css';

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
