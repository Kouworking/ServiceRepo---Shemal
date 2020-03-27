/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import ListingInfo from './listingInfo';
import CarouselWrapper from './carouselWrapper';
import Names from '../propertyInfo';

const PageContainer = styled.div`
width:auto;
font-family: Avenir-Heavy;
`;

const Text = styled.div`
font-size: 28px;
line-height: 32px;
text-align: start;
margin-bottom: 17px;
margin-top:10px;
text-align: center
`;

const Container = styled.div`
width: 299px;
float:left;
border: .4px solid white;
margin-bottom: 25px;
margin-right: 15px;
margin-left: 15px;
background-color: #e3e1e1;
`;
const ImagesContainer = styled.div`
margin-left:100px;
margin-right:50px;
min-width:500px;
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
          <Container className="Container" >
            <CarouselWrapper propInfo={i} />
            <ListingInfo
              propName={this.state.propertyNames[i]}
              propLocation={this.state.propertyLocations[i]}
            />
          </Container>
      );
    }
    return (
      <PageContainer className="PageContainer" >
        <Text>
          Similar spaces you might also be interested in
        </Text>
        <ImagesContainer className="ImgsContainer">
          {
            items
          }
          </ImagesContainer>
      </PageContainer>
    );
  }
}

export default App;
