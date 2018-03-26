// @flow

import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './Header.css'

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
        <button onClick={this.handleToggle}>Header</button>
      </header>
    )
  }
}

export default Header
