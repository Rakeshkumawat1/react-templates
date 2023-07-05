import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

//All pages
import LandingPage from './pages/landingPage';
import Home from './pages/Home';
import Login from './pages/Auth/Login';


function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Home/>} />
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
      </Routes>
  );
}

export default App;
