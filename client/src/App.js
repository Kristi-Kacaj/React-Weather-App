import React, { Component } from 'react';
import './components/App.css';
import {  Main } from './components';
import {  Head } from './components';
import {  Footer } from './components';

import "bootstrap/dist/css/bootstrap.css";





class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };
  }


  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
      
      <div>

        <Head />
        <Main />

        <Footer/>
        
      </div>

      
    );
  }
}

export default App;
