// @flow

import * as React from 'react'

import './ScrollBoxItem.css'

type Props = {
  title: string
}

class ScrollBox extends React.PureComponent<Props> {
  render () {
    const { title } = this.props
    return (
      <li className='scroll-box-item'>
        {title}
      </li>
    )
  }
}

export default ScrollBox
