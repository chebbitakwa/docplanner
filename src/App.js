import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Intro from './Intro.js';
import Patients from './Patients.js';
import Companys from './Companys.js';
import Statistics from './Statistics.js';
import Pays from './Pays.js';
import Contact from './Contact.js';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Intro/>
      <Patients/>
      <Companys/>
      <Statistics/>
      <Pays/>
      <Contact/>
      </div>
    );
  }
}

export default App;
