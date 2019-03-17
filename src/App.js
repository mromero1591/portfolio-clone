import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className='header'>
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
