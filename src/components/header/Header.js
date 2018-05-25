// @flow

import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ScrollAnimation from 'react-animate-on-scroll'

import Logo from '../logo/Logo'
import Navigation from '../navigation/Navigation'
import ScrollBox from '../scroll-box/ScrollBox'
import WeAreOpen from '../we-are-open/WeAreOpen'
import Hamburger from '../hamburger/Hamburger'

type Props = {
  pathname: string
}

type State = {
  projectIsOpen: boolean,
  hamburgerIsOpen: boolean,
}

class Header extends React.PureComponent<Props, State> {
  state = {
    projectIsOpen: false,
    hamburgerIsOpen: false
  }

  componentDidUpdate (prevProps: Props) {
    if (this.props.pathname !== prevProps.pathname) {
      this.setState({ projectIsOpen: false, hamburgerIsOpen: false })
    }
  }

  handleProjectToggle = () => {
    this.setState((oldState) => ({ projectIsOpen: !oldState.projectIsOpen }))
  }

  handleHamburgerToggle = () => {
    this.setState((oldState) => ({ hamburgerIsOpen: !oldState.hamburgerIsOpen }))
  }

  render () {
    const { pathname } = this.props
    const { projectIsOpen, hamburgerIsOpen } = this.state
    const delay = 2

    return (
      <header className='header'>
        <TransitionGroup>
          {projectIsOpen &&
            <CSSTransition
              classNames='scroll-box--animate'
              timeout={{ enter: 500, exit: 400 }}
            >
              <ScrollBox />
            </CSSTransition>
          }
        </TransitionGroup>

        <div className='header__hero'>
          <ScrollAnimation animateIn='fadeIn' duration={2} delay={delay}>
            <WeAreOpen title='Oh yes!'>
              We're definitely ready for<br />new projects in Q3
            </WeAreOpen>
            <div className='header__content'>
              <Navigation showOnDesktop handleProjectToggle={this.handleProjectToggle} />
              {hamburgerIsOpen &&
                <Navigation showOnMobile handleProjectToggle={this.handleProjectToggle} />
              }
              <Hamburger pathname={pathname} handleHamburgerToggle={this.handleHamburgerToggle} />
              <Logo />
            </div>
          </ScrollAnimation>
        </div>
      </header>
    )
  }
}

export default Header
