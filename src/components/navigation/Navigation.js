// @flow

import * as React from 'react'

import { Link } from 'react-static'

type Props = {
  handleToggle: () => void
}

class Navigation extends React.PureComponent<Props> {
  render () {
    const { handleToggle } = this.props

    return (
      <ul className='navigation o-list-inline'>
        <li className='navigation__item o-list-inline__item'>
          <Link className='navigation__link' to='/about'>About</Link>
        </li>
        <li className='navigation__item o-list-inline__item'>
          <button className='navigation__link' onClick={handleToggle}>Projects</button>
        </li>
        <li className='navigation__item o-list-inline__item'>
          <Link className='navigation__link' to='/contact'>Contact</Link>
        </li>
      </ul>
    )
  }
}

export default Navigation
