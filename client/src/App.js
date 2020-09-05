import React, { Component } from 'react';

import './App.css';

import {  Main } from './components/Main/Main';
import {  Head } from './components/Head/Head';
import {  Footer } from './components/Footer/Footer';
import {  Weather } from './components/Weather/weather';

class App extends Component {


  render() {
    return (
      <div >

        <Head />
        <Main /> <Weather />  
        
        <Footer />

      </div>
    );
  }
}

export default App;
