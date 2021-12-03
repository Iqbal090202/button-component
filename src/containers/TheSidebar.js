/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'

const TheSidebar = () => {
  return (
    <div className="the-sidebar">
      <div className="brand"><span style={{color: '#F7542E'}}>Dev</span>challenges.io</div>
      <div className="sidebar-nav">
        <div className="nav-link">
          <a href="#">Colors</a>
        </div>
        <div className="nav-link">
          <a href="#">Typography</a>
        </div>
        <div className="nav-link">
          <a href="#">Spaces</a>
        </div>
        <div className="nav-link">
          <NavLink 
            to="/button"
            activeClassName="selected"
          >Buttons</NavLink>
        </div>
        <div className="nav-link">
          <a href="#">Inputs</a>
        </div>
        <div className="nav-link">
          <a href="#">Grid</a>
        </div>
      </div>
    </div>
  )
}

export default TheSidebar
