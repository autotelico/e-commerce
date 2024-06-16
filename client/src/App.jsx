import { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import CategoryForm from './components/categories/CategoryCreate';
import CategoryList from './components/categories/CategoryList';
import CategoryDelete from './components/categories/CategoryDelete';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/categories" exact Component={CategoryList} />
          <Route path="/create/category" exact Component={CategoryForm} />
          <Route path="/delete/category/:id" Component={CategoryDelete} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
