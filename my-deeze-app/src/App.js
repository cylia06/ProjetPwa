import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import logo from './logo.svg';
import './App.css';
import NavBar from './js/NavBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './js/Search';
import Trending from './js/Trending';
import Saved from './js/Saved';
import Player from './js/Player';
function App() {
  return (
  <Router>
    <NavBar/>  
    <Route path="/player" component={Player} />
    <Route path="/Search" component={Search}  />
    <Route path="/saved" component={Saved} />
    <Route path="/trending" component={Trending} />
   
  </Router>
   
  );
}



export default App;
