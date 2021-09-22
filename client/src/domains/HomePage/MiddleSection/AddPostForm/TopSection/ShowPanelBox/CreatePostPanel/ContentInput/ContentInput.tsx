import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

function ContentInput() {
  return (
    <Container>
      <TextareaAutosize placeholder="What do you want to talk about?" />
    </Container>
  );
}

const Container = styled.div`
  padding: 25px 25px 25px 0;
  textarea {
    width: 100%;
    resize: none;
    overflow: hidden;

    font-size: 15px;
    font-family: inherit;
    letter-spacing: 0.5px;
    font-weight: 300;
  }
`;
export default ContentInput;
