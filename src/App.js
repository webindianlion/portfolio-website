import React from 'react';
import './App.css'
import {  Routes, Route } from 'react-router-dom';
// import Topnav from './components/Topnav';
import Home from './components/Home';



function App() {
  
  return (
    <div className='container'>
        {/* <Topnav /> */}
        <Routes>
          <Route path="/" Component={Home } />
          {/* <Route path="/comp1" Component={Comp1 } /> */}
          <Route index Component={Home} />
        </Routes>
      </div>
  )
}

export default App