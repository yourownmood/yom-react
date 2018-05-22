// @flow

import * as React from 'react'

type Props = {
  title: string,
  children: React.Node
}

class WeAreOpen extends React.Component<Props> {
  render () {
    const { title, children } = this.props

    return (
      <p className='we-are-open'>
        <b className='we-are-open__title'>{title}</b>
        <span className='we-are-open__text'>{children}</span>
      </p>
    )
  }
}

export default WeAreOpen
