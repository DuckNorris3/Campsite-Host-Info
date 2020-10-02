/**
 * @jest-environment jsdom
 */


import React from 'react';
import {shallow, mount, render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import from './App.jsx';
configure({adapter: new Adapter() })

describe('Sanity Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  })
})

describe('React Test', () => {


  test('should render without throwing an error', () => {
    let wrapper = mount(<App />);
    expect(wrapper.find('Location')).toBeTruthy();
  })
})