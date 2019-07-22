import React from 'react';
import Divider from '@material-ui/core/Divider';
import Header from './Header';
import RecordsDisplay from './RecordsDisplay';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
				<Divider variant='middle' />
				<RecordsDisplay />
				<Divider variant='middle' />
				<Footer />
      </div>
    );
  }
}

export default App;
