// @flow

import * as React from 'react'
import { Link } from 'react-static'
import ClassNames from 'classnames'

type Props = {
  title: string,
  client: string,
  url: string,
  color: string,
  thumb?: string,
  thumbPosition?: string,
  logo?: string
}

class ScrollBox extends React.PureComponent<Props> {
  render () {
    const { client, color, logo, thumb, thumbPosition, title, url } = this.props
    return (
      <li className='scroll-box-item' style={{backgroundColor: color}}>
        <Link
          to={url}
          className={ClassNames('scroll-box-item__link', thumbPosition ? {[`u-bg--${thumbPosition}`]: thumbPosition} : null)}
          style={thumb ? {backgroundImage: `url(${thumb})`} : null}
        >
          <span className='scroll-box-item__overlay'>
            <span className='scroll-box-item__title' dangerouslySetInnerHTML={{__html: title}} />
            {client}
          </span>
          {logo && <img src={logo} className='scroll-box-item__logo' alt={client} />}
        </Link>
      </li>
    )
  }
}

export default ScrollBox
