import styled from "styled-components";

// icons
import CloseIcon2 from "../../../../../../../../common/components/Icons/CloseIcon2";

function Title({ closePanel }) {
  return (
    <Container>
      <p>Create a post</p>
      <div onClick={closePanel}>
        <CloseIcon2 />
      </div>
    </Container>
  );
}

const Container = styled.div`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 1;
    padding: 8px 25px;
    box-shadow: 0 1px rgba(0, 0, 0, 0.1);
    p {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 400;
    }
    div {
      display: flex;
      padding: 8px;
      border-radius: 100px;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      svg {
        fill: rgba(0, 0, 0, 0.6);
        width: 25px;
      }
    }
  }
`;
export default Title;
