import styled, { css } from "styled-components";

function WorkPanel({ isactive }) {
  return <Panel isactive={isactive}></Panel>;
}

const Panel = styled.div<{ isactive: boolean }>`
  width: 380px;
  height: 100vh;
  border-radius: 5px 0 5px 5px;
  background-color: white;
  box-shadow: -1px 1px 2px var(--nav-color-icon);
  position: absolute;
  z-index: 1;

  transition: transform 0.5s ease-in-out;
  transform: translateX(150%);
  ${({ isactive }) => {
    if (isactive) {
      return css`
        transform: translateX(-170px);
      `;
    }
  }}
`;
export default WorkPanel;
