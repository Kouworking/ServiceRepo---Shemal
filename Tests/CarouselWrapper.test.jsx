import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CarouselWrapper from '../client/src/carouselWrapper';

describe('Carousel Container Tests', () => {
  const wrapper = shallow(<CarouselWrapper />);
  it('should render the Carousel Component', () => {
    expect(wrapper).toExist();
  });
  it('should have two elements within the component', () => {
    expect(wrapper.children().length).toEqual(2);
  });
  // it('should do something', () => {
  //   const image = wrapper.find('styled.div').text();
  //   console.log(wrapper.debug());
  //   expect(image).toBe(true);
  // });
});
