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
})
