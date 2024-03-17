import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Register" element={<Register />} /> {/* Render Home or App component here */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
