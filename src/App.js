// @flow

import * as React from 'react'
// $FlowFixMe
import { hot } from 'react-hot-loader'
import { Router } from 'react-static'

import Routes from './Routes'

import './styles/main.css'

type Props = {}

class App extends React.Component<Props> {
  render () {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}

export { App }
export default hot(module)(App)
