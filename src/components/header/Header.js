// @flow

import * as React from 'react'
import { withRouter, type RouterHistory } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Logo from '../logo/Logo'
import Navigation from '../navigation/Navigation'
import ScrollBox from '../scroll-box/ScrollBox'
import WeAreOpen from '../we-are-open/WeAreOpen'

type Props = {
  history: RouterHistory
}

type State = {
  isOpen: boolean
}

class Header extends React.PureComponent<Props, State> {
  state = {
    isOpen: false
  }

  componentWillMount () {
    this.props.history.listen((location, action) => {
      this.setState({ isOpen: false })
    })
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
              <ScrollBox />
            </CSSTransition>
          }
        </TransitionGroup>

        <div className='header__hero'>
          <WeAreOpen title='Oh yes!'>
            We're definitely ready for<br />new projects in Q3
          </WeAreOpen>
          <Navigation handleToggle={this.handleToggle} />
          <Logo />
        </div>
      </header>
    )
  }
}

export { Header }
export default withRouter(Header)
