import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './screens/Login';
import Home from './screens/Home';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyB7gcq5Yq00H0-XlzwUAuaJqZ_08NqZFZY",
  authDomain: "gymstats-3ac7b.firebaseapp.com",
  projectId: "gymstats-3ac7b",
  storageBucket: "gymstats-3ac7b.appspot.com",
  messagingSenderId: "975763823939",
  appId: "1:975763823939:web:2fee9ed849865d7911e3f6",
  measurementId: "G-G7Z1Z8GDGV"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/app" element={<App />} /> {/* Render Home or App component here */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
