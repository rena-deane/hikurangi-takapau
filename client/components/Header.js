import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './Header'

export default React.createClass ({
render() {
  return (
    <div id='header'>
      <div id="content-wrapper">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
          <li><Link to='/about' activeStyle={{ color: '#b0b9b6'}}>About</Link></li>
          <li><Link to='/explore' activeStyle={{ color: '#b0b9b6'}}>Explore</Link></li>
          <li><Link to='/weather' activeStyle={{ color: '#b0b9b6'}}>Weather</Link></li>
          </ul>
        </div>
      </div>

      <h1>TE TAKAPAU-A-MAUI</h1>

      <div id="carvings-container">
        {this.props.children}
      </div>
    </div>

  )
}
})