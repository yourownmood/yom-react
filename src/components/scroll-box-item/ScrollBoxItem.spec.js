// @flow

import React from 'react'
import { shallow } from 'enzyme'

import ScrollBoxItem from './ScrollBoxItem'

const props = {
  title: 'Title',
  client: 'Client',
  url: '/url',
  color: '#f00'
}

describe('ScrollBoxItem', () => {
  it('should render correctly with a logo', () => {
    const imgSrc = 'images/logo.png'
    const component = shallow(<ScrollBoxItem logo={imgSrc} {...props} />)
    expect(component.find('.scroll-box-item__logo').prop('src')).toBe(imgSrc)
  })

  it('should render correctly with a thumb', () => {
    const thumbSrc = 'images/thumb.png'
    const thumbPosition = 'cc'
    const component = shallow(<ScrollBoxItem thumb={thumbSrc} thumbPosition={thumbPosition} {...props} />)
    expect(component.find('.scroll-box-item__link').prop('style')).toEqual({'backgroundImage': `url(${thumbSrc})`})
    expect(component.find('.scroll-box-item__link .u-bg--cc')).toHaveLength(1)
  })

  it('should render a correct backgroundColor', () => {
    const color = '#f00'
    const component = shallow(<ScrollBoxItem color={color} {...props} />)
    expect(component.find('.scroll-box-item').prop('style')).toEqual({'backgroundColor': color})
  })
})
