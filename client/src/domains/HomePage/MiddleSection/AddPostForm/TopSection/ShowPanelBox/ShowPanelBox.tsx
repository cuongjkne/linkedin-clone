import styled from "styled-components";

// components
import { CustomCoverScreen } from "../../common/CustomCoverScreen/CustomCoverScreen.style";
import withTogglePanel from "../../common/withTogglePanel/withTogglePanel";
import CreatePostPanel from "./CreatePostPanel/CreatePostPanel";

const ShowPanelBox = ({ isPanelActive, openPanel, closePanel }) => {
  return (
    <>
      <Container onClick={openPanel}>Start a post</Container>
      <CustomCoverScreen isactive={isPanelActive} />
      <CreatePostPanel isactive={isPanelActive} closePanel={closePanel} />
    </>
  );
};
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

const ShowPanelBoxWithTogglePanel = withTogglePanel(ShowPanelBox);

export default ShowPanelBoxWithTogglePanel;
