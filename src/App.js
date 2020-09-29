import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Homepage/Home';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
