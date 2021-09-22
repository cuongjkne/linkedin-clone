import styled, { css } from "styled-components";

// function CoverScreen({ isactive }) {
//   return <Container isactive={isactive} />;
// }
const CoverScreen = styled.div<{ isactive: boolean }>`
  background-color: rgba(0, 0, 0, 0.6);
  width: 0vw;
  height: 100vh;
  right: 0;
  top: 52px;
  position: absolute;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${({ isactive }) => {
    if (isactive) {
      return css`
        opacity: 1;
        width: 100vw;
      `;
    }
  }}
`;
export default CoverScreen;
