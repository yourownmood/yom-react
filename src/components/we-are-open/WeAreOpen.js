// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
  title: string
}

class WeAreOpen extends React.Component<Props> {
  render () {
    const { children, title } = this.props

    return (
      <p className='we-are-open'>
        <b className='we-are-open__title'>{title}</b>
        <span className='we-are-open__text'>{children}</span>
      </p>
    )
  }
}

export default WeAreOpen
