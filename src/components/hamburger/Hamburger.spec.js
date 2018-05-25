// @flow

import React from 'react'
import { shallow } from 'enzyme'

import Hamburger from './Hamburger'

const props = {
  pathname: '/contact',
  handleHamburgerToggle: jest.fn()
}

describe('Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hamburger {...props} />)
    expect(component.find('.hamburger').length).toBe(1)
  })

  it('should handleToggle correctly', () => {
    const component = shallow(<Hamburger {...props} />)
    const button = component.find('.hamburger')
    button.simulate('click')
    expect(component.state()).toEqual({ isOpen: true })
    expect(props.handleHamburgerToggle).toHaveBeenCalled()
  })

  it('should reset state on page change correctly', () => {
    const component = shallow(<Hamburger {...props} />)
    component.setProps({ pathname: '/about' })
    expect(component.state()).toEqual({ isOpen: false })
  })
})
