import React from 'react'
import { mount } from 'enzyme'

import { App } from './App'

describe('App', () => {
  it('Should render App without Crashing', () => {
    const component = mount(<App />)
    expect(component.find('Routes').length).toBe(1)
  })
})
