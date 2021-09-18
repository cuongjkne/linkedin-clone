import styled, { css } from 'styled-components';

//animations
import { subsidenceEffect } from '../common/iconsAnimations.style';

//responsive
//---Laptop S/L: 1024px/1440px
const Laptop = css`
  && {
    cursor: pointer;
    position: relative;
  }
`;
//---Tablet: 768px
const Tablet = css`
  && {
    @media (max-width: 768px) {
      p {
        display: none;
      }
    }
  }
`;
//---Mobile S/L/M: 320px/375px/425px
const Mobile = css`
  && {
    @media (max-width: 425px) {
      display: none;
    }
  }
`;

//styles
export const ItemWrapper = styled.div`
  ${[Laptop, Tablet, Mobile]}
`;
export const UserItemWrapper = styled(ItemWrapper)`
  & > div {
    border-right: 1px solid #eff2f8;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 52px;
  justify-content: center;
  align-items: center;
  img {
    width: 24px;
    border-radius: 20px;
  }
  p {
    margin-top: 4px;
    display: flex;

    svg {
      width: 17px;
      height: 17px;
      position: relative;
      top: -2px;
      filter: invert(40%);
    }
  }
  &:hover {
    svg {
      fill: black;
    }

    p {
      color: black;
    }
  }
  &:active {
    img,
    svg,
    p {
      ${subsidenceEffect}
    }
  }
`;
