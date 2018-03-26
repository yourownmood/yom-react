// @flow

import * as React from 'react'

import logo from '../../assets/logo.png'
import Header from '../../components/header/Header'

type Props = {}

class About extends React.Component<Props> {
  render () {
    return (
      <div className='App'>
        <Header />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>About</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default About
