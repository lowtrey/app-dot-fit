import React from 'react';
import Header from './Header';
import RecordsContainer from './RecordsContainer';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
				<RecordsContainer />
				<Footer />
      </div>
    );
  }
}

export default App;
