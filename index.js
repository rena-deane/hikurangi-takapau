import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import About from './components/About'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
    </Router>
), document.querySelector('main'))
console.log('welcome to hikurangi-takapau')
