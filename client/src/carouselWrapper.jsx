import React from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
position: relative;
text-align: left;
font-size: .8em;
color: #fff;
`;

const RateBox = styled.div`
  position: absolute;
  font-weight:bold;
  font-family: Avenir-Roman;
  top: 139px;
  left: 216px;
  border-radius: 2.5px;
  background-color: #212429;
  padding: 2px;
  &:hover {
    cursor:pointer;
    opacity: .80;
  }
`;

const FromHr = styled.span`
  padding-left: 2px;
  padding-right: 2px;
  font-size: 8px;
  font-weight: normal;
`;

const ListingImage = styled.img`
}
`;
ListingImage.displayName = 'ListingImage';

const carouselWrapper = (props) => (
  <Carousel>
    <ListingImage src={props.src} />
    <RateBox>
      <FromHr>
        from
      </FromHr>
      $250
      <FromHr>
        / hr
      </FromHr>
    </RateBox>
  </Carousel>
);

export default carouselWrapper;
