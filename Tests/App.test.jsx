import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/app';


describe('App Component Tests', () => {
  const wrapper = shallow(<App />);
  it('should render the App Component', () => {
    expect(wrapper).toExist();
  });
  test('property Names should return an Array', () => {
    expect(Array.isArray(wrapper.state('propertyNames'))).toBe(true);
  });
  test('random URL property returns an String', () => {
    const url = wrapper.state('randomUrl')();
    expect(typeof url).toBe('string');
  });
});
