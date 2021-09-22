import styled, { css } from "styled-components";

// components
import ContentInput from "./ContentInput/ContentInput";
import Footer from "./Footer/Footer";
import Title from "./Title/Title";
import UserInfo from "./UserInfo/UserInfo";

function CreatePostPanel({ isactive, closePanel }) {
  return (
    <Container isactive={isactive}>
      <Title closePanel={closePanel} />
      <Wrapper>
        <UserInfo />
        <ContentInput />
      </Wrapper>

      <Footer />
    </Container>
  );
}

const Container = styled.div<{ isactive: boolean }>`
  && {
    position: absolute;
    top: 35%;
    left: 50%;

    background-color: white;
    width: 550px;
    border-radius: 10px;
    z-index: 2;
    box-shadow: 0 0 5px rgb(0 0 0 / 60%);

    display: flex;
    flex-direction: column;

    transform: scale(0);
    ${({ isactive }) =>
      isactive &&
      css`
        transform: scale(1) translate(-50%, -50%);
      `}
  }
`;

const Wrapper = styled.div`
  overflow-y: auto;
  height: 200px;
  padding: 25px 0 25px 25px;
`;
export default CreatePostPanel;
