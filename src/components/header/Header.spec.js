// @flow

import React from 'react'
import { shallow } from 'enzyme'

import { Header } from './Header'

const history = {
  length: 1,
  location: {
    pathname: '/contact',
    search: '',
    hash: 'asd123'
  },
  action: 'PUSH',
  listen: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  go: jest.fn(),
  goBack: jest.fn(),
  goForward: jest.fn(),
  block: jest.fn()
}

describe('Header', () => {
  it('should render without crashing', () => {
    const component = shallow(<Header history={history} />)
    expect(component.find('.header').length).toBe(1)
  })

  it('should toggle CSSTransition when isOpen', () => {
    const component = shallow(<Header history={history} />)
    component.setState({ isOpen: true })
    expect(component.find('CSSTransition')).toHaveLength(1)
    component.setState({ isOpen: false })
    expect(component.find('CSSTransition')).toHaveLength(0)
  })

  it('should handleToggle correctly', () => {
    const component = shallow(<Header history={history} />)
    component.instance().handleToggle()
    expect(component.state()).toEqual({ isOpen: true })
    component.instance().handleToggle()
    expect(component.state()).toEqual({ isOpen: false })
  })
})
