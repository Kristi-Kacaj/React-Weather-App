import React from 'react';

import './App.css';

import {  Head } from './components/Head/Head';
import {  Footer } from './components/Footer/Footer';
import {  Weather } from './components/Weather/weather';
import { Form } from './components/Form/form.js';
import { Chart } from './components/Chart/Chart.js';
import {  Comment } from './components/Comment/Comment.js';

class App extends React.Component {  
    
      constructor(props){
        super(props); 
        this.state = {
          
          temperature: undefined,
          icon: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: undefined,
          latitude:undefined,
          longitude:undefined,
          comment: [],
          addComment:{
          user_name: 'User',
          comments: 'test',
    }
    };

    // weather icons depending on the weather
    this.weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
    };
  };

  componentDidMount = async ()=>{
    console.log("component mounted")

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(success=>{
         console.log(success)
         const {latitude, longitude} = success.coords
         this.setState({latitude, longitude})
         this.getWeatherAuto(latitude, longitude)

       })
    }
  };

  getWeatherAuto = async (lat,lon)=>{
    const API_KEY = "011d246d500f6dadbdd8b82cb9613fc3";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (true) {
      this.setState({
        temperature: data.main.temp.toFixed(0),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed.toFixed(0),
        icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        icon: undefined,        
        error: "Please enter the values."
      });
    }
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_KEY = '011d246d500f6dadbdd8b82cb9613fc3';
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp.toFixed(0),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed.toFixed(0),
        // weatherIcon: data.weather[0].icon,
        error: ""
      });
      
      //setting icons to page
      this.get_WeatherIcon(this.weatherIcon, data.weather[0].id);
      console.log(data);

    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        weatherIcon: undefined,        
        error: "Please enter the missing values."
      });
    };
  };
  render() {
    return (
      <div >
        <h1>{this.state.latitude} , {this.state.longitude}</h1>

        <div className='App' >

        <Head />
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature} 
        humidity={this.state.humidity}
        feels_like={this.state.feels_like}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        wind={this.state.wind}
        weatherIcon={this.state.icon}
        error={this.state.error}
        />  
        <Chart/>
        <Comment/>
         <Footer />
        </div>
      </div>
    );
    }
};



export default { App };
