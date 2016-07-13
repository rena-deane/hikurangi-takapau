import React, { Component } from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render () {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/explore'>Explore</Link></li>
                            <li><Link to='/weather'>Huarere</Link></li>
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

