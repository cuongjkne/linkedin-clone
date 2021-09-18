import React from 'react';
import styled from 'styled-components';

//icons
import LinkedinIcon from '../../../../common/Icon/LinkedinIcon';
//components
import LinkItems from './LinkItems/LinkItems';

function Footer() {
  return (
    <Container>
      <LinkItems />
      <CopyRightSection>
        <LinkedinIcon />
        LinkedIn Corporation © 2021
      </CopyRightSection>
    </Container>
  );
}
const Container = styled.div`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;
const CopyRightSection = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: center;
  font-size: 12px;
  svg {
    fill: rgb(11, 103, 194);
    margin-right: 5px;
  }
`;

export default Footer;
