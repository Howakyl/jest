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

  it('Should render the todo list tasks', () => {
    component.find(Todo).forEach((todo, idx) => {
      expect(todo.find('.task-name').text()).toBe(listItems[idx].task)
    })
  })

  it('Should have a state attribute for the new todo that should update when the user types in an input', () => {
    expect(component.state('newTodo')).toBe('')
    component.find('input').simulate('change', {target: {value: 'hello'}})
    expect(component.state('newTodo')).toBe('hello')
  })
})