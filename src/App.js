import React, { Component } from 'react';
import Ledger from './components/Ledger';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Account Ledger</h2>
        </div>
        <Ledger />
      </div>
      );
    }
  }
export default App;