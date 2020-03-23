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
      propertyNames: Names.propertyNames,
      propertyLocations: Names.propertyLocations
    };
  }

  render() {
    const items = [];
    for (let i = 0; i <= 5; i += 1) {
      items.push(
        <Container>
          <CarouselWrapper propInfo={i} />
          <ListingInfo
            propName={this.state.propertyNames[i]}
            propLocation={this.state.propertyLocations[i]}
          />
        </Container>
      );
    }
    return (
      <PageContainer>
        <Text>
          Similar spaces you might also be interested in
        </Text>
        {
          items
        }
      </PageContainer>
    );
  }
}

export default App;
