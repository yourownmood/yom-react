// @flow

import * as React from 'react'
import { Link } from 'react-static'
import { withRouter } from 'react-router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { WOW } from 'wowjs'

import ScrollBox from '../scroll-box/ScrollBox'
import WeAreOpen from '../we-are-open/WeAreOpen'

type Props = {}

type State = {
  isOpen: boolean
}

let wow

class Header extends React.PureComponent<Props, State> {
  state = {
    isOpen: false
  }

  componentWillMount () {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({ isOpen: false })
    })
  }

  componentDidMount () {
    wow = new WOW()
    wow.init()
  }

  componentDidUpdate () {
    wow.sync()
  }

  componentWillUnmount () {
    this.unlisten()
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

        <div className='wow fadeIn' data-wow-duration='2s'>
          <WeAreOpen title='Oh yes!'>
            We're definitely ready for<br />new projects in Q2 2018
          </WeAreOpen>

          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={this.handleToggle}>Header</button>
          </div>

          <img src='' alt='' />
        </div>
      </header>
    )
  }
}

export { Header }
export default withRouter(Header)
