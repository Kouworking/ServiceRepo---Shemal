import React from 'react';
import styled from 'styled-components';
import { UserFriends } from '@styled-icons/fa-solid';

const Container = styled.div`
  line-height: 16px;
  padding-top: 5.5px;
  padding-left: 4.4px;
  padding-bottom:8px;
  &:hover {
    opacity: .6;
    cursor: pointer;
  }
`;
const ListingTitle = styled.h6`
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #343840;
  font-family: Avenir-Heavy,"Helvetica  Neue",Helvetica,Arial,sans-serif;
  margin: 1px;
`;
const ListingLocation = styled.span`
  font-family: Avenir-Roman;
  font-size:10px;
  color: #6a707a;
`;

const ListingAllocation = styled(ListingLocation)`
`;

const PeopleIcon = styled(UserFriends)`
`;

const listingInfo = (props) => (
  <Container>
    <ListingTitle>
      {props.propName}
    </ListingTitle>
    <ListingLocation>
      { props.propLocation }
      &nbsp;
      <PeopleIcon size="10" />
       &nbsp;
      <ListingAllocation>
        13
      </ListingAllocation>
    </ListingLocation>
  </Container>
);

export default listingInfo;
