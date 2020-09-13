import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
