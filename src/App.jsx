import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { navItems } from './api/api';

const App = () => (
  <div className="App">
    <div className="container">
      <Header navItems={navItems} />
    </div>
  </div>
);

export default App;
