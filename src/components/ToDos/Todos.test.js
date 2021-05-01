import React from 'react';
import { mount } from 'enzyme';

import Todos from './Todos';
import Todo from './Todo';

describe('Todos Component', () => {
  const listItems = [
    { task: 'create lesson', done: false},
    { task: 'clean apartment', done: false }
  ]

  let component
  // called before every test
  beforeEach(() => {
    // this time, mount instead of shallow because we will have subcomponents within our ToDos component
    component = mount(<Todos tasks={listItems} />)
  })

  it('Should contain two todo subcomponents', () => {
    expect(component.find(Todo).length).toBe(2)
  })
})