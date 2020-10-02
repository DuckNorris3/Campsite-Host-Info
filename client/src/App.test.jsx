/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  shallow,
  mount,
  // eslint-disable-next-line no-unused-vars
  render,
  configure,
// eslint-disable-next-line import/no-unresolved
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App.jsx';

configure({ adapter: new Adapter() });

describe('Sanity Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('React Test', () => {
  test('should render without throwing an error', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Location')).toBeTruthy();
  });
});
