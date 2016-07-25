import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './components/App.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
  ), document.getElementById('container'))