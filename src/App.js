import React from 'react';
import Header from './Header';
import RecordsDisplay from './RecordsDisplay';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
				<RecordsDisplay />
				<Footer />
      </div>
    );
  }
}

export default App;
