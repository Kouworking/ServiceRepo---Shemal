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
  font-size:9px;
  color: #6a707a;
`;

const Icon = styled(UserFriends)`
<i className="fas fa-user-friends"></i>
`;

const listingInfo = (props) => (
  <Container>
    <ListingTitle>
      {props.propName}
    </ListingTitle>
    <ListingLocation>
      Noe Valley &nbsp;
      <Icon size="10" />
       &nbsp;12
    </ListingLocation>
  </Container>
);

export default listingInfo;
