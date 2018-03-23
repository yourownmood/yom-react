import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import './styles/main.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
