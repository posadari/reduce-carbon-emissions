import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from './screens/Home.js'
import Search from './screens/Search.js'
import Results from './screens/Results';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/results" element={<Results />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
