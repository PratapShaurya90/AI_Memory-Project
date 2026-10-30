import React from 'react';
import { useGlobalClickSound } from './hooks/useGlobalClickSound';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  // 🎵 Initialize the global UI sound engine!
  useGlobalClickSound();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
         <Route path="/workspace" element={<Dashboard />} />

      </Routes>
    </>
  );
};

export default App;