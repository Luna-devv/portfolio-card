// PACKAGES
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import DocumentMeta from 'react-document-meta'

// UTILS
// import config from './config.json'

// PAGES
import Hompage from './pages/homepage'
import Header from './pages/utils/header'

ReactDOM.render(
  <Router>
    <Switch>
      <Header />
      {/* <DocumentMeta meta={config.meta}/> */}
      <Route exact path="/" component={Hompage} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

reportWebVitals()