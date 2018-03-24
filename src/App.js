import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Routes from './Routes'
import './styles/main.css'

class App extends Component {
  render () {
    return (
      <Routes />
    )
  }
}

export default hot(module)(App)
