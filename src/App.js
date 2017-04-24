import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TablesContainer from './TablesContainer';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Lunch Peeps" />
          <h1>Lunch Peeps</h1>
        </div>
        <p className="App-intro">
          With Lunch Peeps, everybody gets some fresh folks to join at noon!
        </p>
        
        <TablesContainer />
      </div>
    );
  }
}

export default App;
