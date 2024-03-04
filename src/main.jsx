import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/Pages/App.jsx';
import Landing from './Components/Pages/Landing.jsx';
import Login from './Components/Pages/Login.jsx';
import Signup from './Components/Pages/Signup.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);
