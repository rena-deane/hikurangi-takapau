import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'
import About from './components/About'
import Carvings from './components/Carvings'
import Weather from './components/Weather'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/takapau-a-maui" component={Carvings}/>
            <Route path="/weather" component={Weather}/>
        </Route>
    </Router>
), document.querySelector('main'))
console.log('welcome to hikurangi-takapau')
