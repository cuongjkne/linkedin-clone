import styled from "styled-components";

// styles
import { PanelModel } from "../../../common/PanelModel/PanelModel.style";

// components
import ContentInput from "./ContentInput/ContentInput";
import Bottom from "./Bottom/Bottom";
import UserInfo from "./UserInfo/UserInfo";
import Title from "../../../common/Title/Title";

function CreatePostPanel({ isactive, closePanel }) {
  return (
    <PanelModel isactive={isactive}>
      <Title text="Create a post" closePanel={closePanel} />
      <Wrapper>
        <UserInfo />
        <ContentInput />
      </Wrapper>
      <Bottom />
    </PanelModel>
  );
}

const Wrapper = styled.div`
  overflow-y: auto;
  height: 200px;
  padding: 25px 0 25px 25px;
`;
export default CreatePostPanel;
