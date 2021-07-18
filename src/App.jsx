import "./App.scss";
import React from 'react';
import { hot } from 'react-hot-loader';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
}

export default hot(module)(App);
