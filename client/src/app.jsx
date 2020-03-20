/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import ListingInfo from './listingInfo';
import CarouselWrapper from './carouselWrapper';
import Names from '../propertyInfo';
import Locations from '../propertyInfo';

const PageContainer = styled.div`
margin-left: 15px;
margin-right: 15px;
`;

const Text = styled.div`
font-size: 28px;
position:realtive;
font-family: Avenir-Heavy;
font-color: #343840;
line-height: 32px;
text-align: start;
margin-bottom: 17px;
margin-top:10px;
`;

const Container = styled.div`
width: 299px;
float:left;
border: .4px solid white;
margin-bottom: 25px;
margin-right: 25px;
background-color: white;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomUrl: () => {
        const number = Math.round(Math.random() * 200, 0);
        return (`https://i.picsum.photos/id/${number}/299/175.jpg`);
      },
      propertyNames: Names.propertyNames,
      propertyLocations: Names.propertyLocations,
      propertyImage: Names.propertyImages[0]
    };
    this.rightArrow = this.rightArrow.bind(this);
  }

  rightArrow() {
    this.setState({
      propertyImage: Names.propertyImages[1]
    });
  }

  render() {
    return (
      <PageContainer>
        <Text>
          Similar spaces you might also be interested in
        </Text>
        <Container>
          <CarouselWrapper />
          <ListingInfo propName={this.state.propertyNames[0]} propLocation={this.state.propertyLocations[0]} />
        </Container>
        <Container>
          <CarouselWrapper />
          <ListingInfo propName={this.state.propertyNames[1]} propLocation={this.state.propertyLocations[1]} />
        </Container>
        <Container>
          <CarouselWrapper />
          <ListingInfo propName={this.state.propertyNames[2]} propLocation={this.state.propertyLocations[2]} />
        </Container>
        <Container>
          <CarouselWrapper />
          <ListingInfo propName={this.state.propertyNames[3]} propLocation={this.state.propertyLocations[3]} />
        </Container>
        <Container>
          <CarouselWrapper />
          <ListingInfo propName={this.state.propertyNames[4]} propLocation={this.state.propertyLocations[4]} />
        </Container>
        <Container>
          <CarouselWrapper />
          <ListingInfo propName={this.state.propertyNames[5]} propLocation={this.state.propertyLocations[5]} />
        </Container>
      </PageContainer>
    );
  }
}

export default App;
