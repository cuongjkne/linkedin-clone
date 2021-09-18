import styled, { css } from 'styled-components';

//animations
import { subsidenceEffect } from '../common/iconsAnimations.style';

//responsive
//---Mobile S/L/M: 320px/375px/425px
const Mobile = css`
  @media (max-width: 425px) {
    display: block;
    position: relative;
    & > div:first-child {
      display: flex;
      justify-content: center;
      height: 52px;
      align-items: center;
    }
    &:active {
      & > svg {
        ${subsidenceEffect}
      }
    }
  }
`;
export const Container = styled.div`
  display: none;
  ${[Mobile]}
`;
