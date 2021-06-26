// PACKAGES
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import DocumentMeta from 'react-document-meta'
import { Helmet } from 'react-helmet'

// UTILS
import config from './config.json'

// PAGES
import Hompage from './pages/homepage'
import Header from './pages/utils/header'
import Footer from './pages/utils/footer'

ReactDOM.render(
  <Router>
    {/* <DocumentMeta meta={config.meta} /> */}
    <Helmet>
      <title>{config.meta['browser-title']}</title>
      <link rel="shortcut icon" type="image/x-icon" href={config.meta.favicon} />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={Hompage} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
)

reportWebVitals()