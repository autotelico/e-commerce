import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import AddItemForm from './components/AddItemForm';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/add" exact Component={AddItemForm} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
