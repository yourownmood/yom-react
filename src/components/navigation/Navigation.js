// @flow

import * as React from 'react'
import { Link } from 'react-static'
import ClassNames from 'classnames'

type Props = {
  handleProjectToggle: () => void,
  showOnDesktop?: boolean,
  showOnMobile?: boolean
}

class Navigation extends React.PureComponent<Props> {
  render () {
    const { handleProjectToggle, showOnDesktop, showOnMobile } = this.props

    return (
      <ul className={ClassNames(
        'navigation o-list-inline',
        {
          'navigation--desktop': showOnDesktop,
          'navigation--mobile': showOnMobile
        }
      )}>
        <li className='navigation__item o-list-inline__item'>
          <Link className='navigation__link' to='/about'>About</Link>
        </li>
        <li className='navigation__item o-list-inline__item'>
          <button className='navigation__link' onClick={handleProjectToggle}>Projects</button>
        </li>
        <li className='navigation__item o-list-inline__item'>
          <Link className='navigation__link' to='/contact'>Contact</Link>
        </li>
      </ul>
    )
  }
}

export default Navigation
