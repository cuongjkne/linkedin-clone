import styled, { css } from "styled-components";

export const PanelModel = styled.div<{ isactive: boolean }>`
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