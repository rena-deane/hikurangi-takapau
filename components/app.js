import React, { Component } from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render () {
    return (
        <div>
            <ul>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
  }

})