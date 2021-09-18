import React from 'react';
import styled from 'styled-components';

//components
import CoursePanel from './CoursePanel/CoursePanel';
import FollowsPanel from './FollowsPanel/FollowsPanel';
import Footer from './Footer/Footer';

function RightSide() {
  return (
    <Container>
      <FollowsPanel />
      <CoursePanel />
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  width: 320px;
`;

export default RightSide;
