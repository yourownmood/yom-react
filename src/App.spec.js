import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  it('Should render App without Crashing', () => {
    const component = shallow(<App />)
    expect(component.find('Routes').length).toBe(1)
  })
})
