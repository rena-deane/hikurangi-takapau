import React, { Component } from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render () {
    return (
        <div id="content-wrapper">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to='/about' activeStyle={{ color: '#b0b9b6'}}>About</Link></li>
                            <li><Link to='/explore' activeStyle={{ color: '#b0b9b6'}}>Explore</Link></li>
                            <li><Link to='/weather' activeStyle={{ color: '#b0b9b6'}}>Huarere</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="carvings-container">
            {this.props.children}
            </div>
        </div>
    )
  }
})

