import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './client/components/App'
import About from './client/components/About'
import Carvings from './client/components/Carvings'
import Weather from './client/components/Weather'
import LandingPage from './client/components/LandingPage'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/explore" component={Carvings} />
            <Route path="/about" component={About} />
            <Route path="/weather" component={Weather} />
        </Route>
    </Router>
), document.querySelector('main'))
console.log('welcome to hikurangi-takapau')
