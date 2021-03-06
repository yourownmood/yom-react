import React from 'react'
import { shallow } from 'enzyme'

import { Routes } from './Routes'

describe('Routes', () => {
  it('Should render Routes without Crashing', () => {
    const component = shallow(<Routes location={{pathname: '/contact'}} />)
    expect(component.find('Route').length).toBe(5)
  })
})
