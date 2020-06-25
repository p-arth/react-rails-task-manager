import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/header/Header';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTrashAlt);

class App extends Component {
  render() {
    
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
