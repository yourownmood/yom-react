// @flow

import * as React from 'react'
import { Link } from 'react-static'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ScrollBox from '../scroll-box/ScrollBox'

type Props = {}

type State = {
  isOpen: boolean
}

class Header extends React.PureComponent<Props, State> {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState((oldState) => ({ isOpen: !oldState.isOpen }))
  }

  render () {
    const { isOpen } = this.state

    return (
      <header className='header'>
        <TransitionGroup>
          {isOpen &&
            <CSSTransition
              classNames='scroll-box--animate'
              timeout={{ enter: 500, exit: 400 }}
            >
              <ScrollBox
                onToggleClick={this.handleToggle}
              />
            </CSSTransition>
          }
        </TransitionGroup>

        <p>
          <b>Oh yes!</b>
          We're definitely ready for
          new projects in Q2 2018
        </p>

        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <button onClick={this.handleToggle}>Header</button>
        </div>

        <img src='' alt='' />
      </header>
    )
  }
}

export default Header
