import React from 'react'
import { NavLink } from 'react-router-dom';

function Topnav() {
    
  return (
    <>
      <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <ul className="nav nav-pills">
                <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                
            </ul>
          </header>
      </div>
    </>
  )
}

export default Topnav;

