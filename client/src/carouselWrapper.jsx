/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { ArrowIosForwardOutline, ArrowIosBackOutline } from '@styled-icons/evaicons-outline/';
import Images from '../propertyInfo';


const Carousel = styled.div`
position: relative;
color: #fff;
`;

const RateBox = styled.div`
  position: absolute;
  font-weight:bold;
  font-family: Avenir-Roman;
  top: 139px;
  left: 206px;
  border-radius: 2.5px;
  background-color: #212429;
  padding: 2px;
  &:hover {
    cursor:pointer;
    opacity: .80;
  }
`;

const FromHr = styled.span`
  padding-left: 3px;
  padding-right: 2px;
  font-size: 8px;
  font-weight: normal;
`;

const ListingImage = styled.img`
}
`;

const RightArrow = styled(ArrowIosForwardOutline)`
position:absolute;
top: 70px;
right: .5px;
color:white;
opacity:.6;
&:hover {
  cursor: pointer;
  opacity: .4;
}
`;

const LeftArrow = styled(ArrowIosBackOutline)`
position:absolute;
top:70px;
color:white;
opacity:.6;
&:hover {
  cursor: pointer;
  opacity: .4;
}
`;

class carouselWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      propertyImage: Images.propertyImages,
      propertyRate: Images.propertyRate
    };
    this.rightArrow = this.rightArrow.bind(this);
    this.leftArrow = this.leftArrow.bind(this);
  }

  rightArrow() {
    const { length } = Images.propertyImages;
    if (this.state.counter === length - 1) {
      this.setState((state) => ({
        counter: 0
      }));
      return;
    }
    this.setState((state) => ({
      counter: state.counter + 1
    }));
  }

  leftArrow() {
    const { length } = Images.propertyImages;
    if (this.state.counter === 0) {
      this.setState((state) => ({
        counter: length - 1
      }));
      return;
    }
    this.setState((state) => ({
      counter: state.counter - 1
    }));
  }

  render() {
    return (
      <Carousel>
        <RightArrow size="55" onClick={this.rightArrow} />
        <LeftArrow size="55" onClick={this.leftArrow} />
        <ListingImage src={this.state.propertyImage[this.state.counter]} />
        <RateBox>
          <FromHr>
            from
          </FromHr>
          $
          {this.state.propertyRate[0]}
          <FromHr>
            / hr
          </FromHr>
        </RateBox>
      </Carousel>
    );
  }
}

export default carouselWrapper;