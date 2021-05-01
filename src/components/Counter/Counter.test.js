import React from 'react';
import { shallow } from 'enzyme';

import Counter from './Counter';

describe('Counter component', () => {

  let component
  beforeEach(() => {
    component = shallow(<Counter />)
  })

  it('should have a header that says "Counter"', () => {
    expect(component.contains(<h1>Counter</h1>)).toBe(true)
  })
})