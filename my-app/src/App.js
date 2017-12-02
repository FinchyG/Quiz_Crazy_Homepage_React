import React, { Component } from 'react';
import './App.css';
import { Title_Header } from './Title_Header';
import { Left_Section } from './Left_Section';
import { Right_Section } from './Right_Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title_Header />
        <Left_Section />
        <Right_Section />
      </div>
    );
  }
}

export default App;
