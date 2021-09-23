import React from "react";
import styled from "styled-components";

// components
import PostItems from "./PostItems/PostItems";

function BottomSection() {
  return (
    <Container>
      <PostItems />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BottomSection;
