import React, { Component } from 'react';

import './components/App.css';

import {  Main } from './components';
import {  Head } from './components';
import {  Footer } from './components';

class App extends Component {


  render() {
    return (
      <div >

        <Head />
        <Main />
        <Footer />

      </div>
    );
  }
}

export default App;
