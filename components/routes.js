import React from 'react'
import { Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import About from './About'

module.exports = (
    <Route history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
    </Route>
)