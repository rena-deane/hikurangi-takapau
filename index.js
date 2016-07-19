import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './client/components/App'
import Routes from './routes'

render((
  <Provider store = { Store }>
    <div id='main'>{ Routes } </div>
    <App />
  </Provider>
), document.querySelector('main'))
console.log('welcome to hikurangi-takapau')
