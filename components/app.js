import React, { Component } from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render () {
    return (
        <div>
            <div id="navigation">
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/takapau-a-maui'>Te Takapau-a-Maui</Link></li>
                    <li><Link to='/weather'>Huarere</Link></li>
                </ul>
            </div>
            <div id="carvings-container">
                {this.props.children}
            </div>
        </div>
    )
  }
})