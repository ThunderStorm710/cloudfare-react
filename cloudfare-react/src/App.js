import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Base from './components/Base';
import Subject1 from './pages/Subject1';
import Subject2 from './pages/Subject2';
import Subject3 from './pages/Subject3';
import Subject4 from './pages/Subject4';
import Subject5 from './pages/Subject5';
import Subject6 from './pages/Subject6';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Base>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/subject1" element={<Subject1 />} />
            <Route path="/subject2" element={<Subject2 />} />
            <Route path="/subject3" element={<Subject3 />} />
            <Route path="/subject4" element={<Subject4 />} />
            <Route path="/subject5" element={<Subject5 />} />
            <Route path="/subject6" element={<Subject6 />} />
          </Routes>
        </Base>
      </div>
    </Router>
  );
}

export default App;
