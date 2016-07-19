import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './client/components/App'
import About from './client/components/About'
import Carvings from './client/components/Carvings'
import Weather from './client/components/Weather'

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/explore" component={Carvings} />
      <Route path="/about" component={About} />
      <Route path="/weather" component={Weather} />
    </Route>
  </Router>
)