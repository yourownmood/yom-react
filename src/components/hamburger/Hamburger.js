// @flow

import * as React from 'react'
import ClassNames from 'classnames'

type Props = {
  pathname: string,
  handleHamburgerToggle: () => void
}

type State = {
  isOpen: boolean
}

class Hamburger extends React.PureComponent<Props, State> {
  state = {
    isOpen: false
  }

  componentDidUpdate (prevProps: Props) {
    if (this.props.pathname !== prevProps.pathname) {
      this.setState({ isOpen: false })
    }
  }

  handleToggle = () => {
    this.setState((oldState) => ({ isOpen: !oldState.isOpen }))
    this.props.handleHamburgerToggle()
  }

  render () {
    const { isOpen } = this.state

    return (
      <button
        type='button'
        onClick={this.handleToggle}
        className={ClassNames('hamburger hamburger--squeeze', { 'hamburger--is-active': isOpen })}
      >
        <span className='hamburger__box'>
          <span className='hamburger__inner' />
        </span>
      </button>
    )
  }
}

export default Hamburger
