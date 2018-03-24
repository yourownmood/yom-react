// @flow

import * as React from 'react'

import './Header.css'

import ScrollBox from '../scroll-box/ScrollBox'

type Props = {}

class Header extends React.PureComponent<Props> {
  render () {
    return (
      <header className='header'>
        <ScrollBox />
        Header
      </header>
    )
  }
}

export default Header
