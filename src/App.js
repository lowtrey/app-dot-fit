import React from 'react';
import Header from './components/Header';
import SessionContainer from './components/SessionContainer';
import Footer from './components/Footer';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
				<SessionContainer />
				<Footer />
      </div>
    );
  }
}

export default App;
