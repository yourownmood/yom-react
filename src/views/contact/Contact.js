// @flow

import * as React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import logo from '../../assets/logo.png'

type Props = {}

class Contact extends React.Component<Props> {
  render () {
    return (
      <div className='App'>
        <ScrollAnimation animateIn='fadeInUp' delay={1.5}>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Contact</h1>
          </div>
        </ScrollAnimation>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Contact
