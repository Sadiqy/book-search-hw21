import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Jumbotron />
    </Router>
    </>

  );
}

export default App;
