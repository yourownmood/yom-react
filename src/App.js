// @flow

import * as React from 'react'
// $FlowFixMe
import { hot } from 'react-hot-loader'

import Header from './components/header/Header'
import Routes from './Routes'

import './styles/main.css'

type Props = {}

class App extends React.Component<Props> {
  render () {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    )
  }
}

export default hot(module)(App)
