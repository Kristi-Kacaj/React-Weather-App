import React, { Component } from 'react';

import './App.css';

import {  Main } from './components/Main/Main';
import {  Head } from './components/Head/Head';
import {  Footer } from './components/Footer/Footer';
import {  Weather } from './components/Weather/weather';
import { Form } from './components/Form/form.js';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    feels_like: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const key = "";


  }

  render() {
    return (
      <div >

        <Head />
        <Main /> 
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature} 
        humidity={this.state.humidity}
        feels_like={this.state.feels_like}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error}
        />  
        
        <Footer />

      </div>
    );
  }
}

export default App;
