import React, { useState } from "react";
import styled from "styled-components";

// components
import CoverScreen from "../../../../../../common/components/CoverScreen/CoverScreen";
import CreatePostPanel from "./CreatePostPanel/CreatePostPanel";

function ShowPanelBox() {
  const [isPanelActive, setisPanelActive] = useState(false);

  // functions
  const showPanel = () => {
    setisPanelActive(true);
  };
  const closePanel = () => {
    setisPanelActive(false);
  };

  return (
    <>
      <Container onClick={showPanel}>Start a post</Container>
      <CustomCoverScreen isactive={isPanelActive} />
      <CreatePostPanel isactive={isPanelActive} closePanel={closePanel} />
    </>
  );
}
const Container = styled.div`
  cursor: pointer;
  padding: 14px 20px;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 450px;
  color: #00000090;
  font-weight: 500;
  &:hover {
    background-color: rgba(0, 0, 0, 0.116);
  }
`;
const CustomCoverScreen = styled(CoverScreen)`
  && {
    top: 0;
    z-index: 1;
  }
`;
export default ShowPanelBox;
