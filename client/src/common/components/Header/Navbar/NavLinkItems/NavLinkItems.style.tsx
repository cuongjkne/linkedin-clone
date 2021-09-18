import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//animations
import { subsidenceEffect } from '../common/iconsAnimations.style';

const UnderlineBar = css`
  &::after {
    content: ' ';
    width: 100%;
    height: 2.2px;
    background-color: black;
    position: relative;
    top: 4px;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }
`;

//responsive
//---Laptop L: 1440px
const Laptop = css<{ isactive?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  p {
    margin-top: 2px;
  }
  ${UnderlineBar}

  &:active {
    svg,
    p {
      ${subsidenceEffect}
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
  ${({ isactive }) => {
    if (isactive) {
      return css`
        &::after {
          transform: scaleX(1);
        }
        svg {
          fill: black !important;
        }
        p {
          color: black;
        }
      `;
    }
  }}
`;
//---Tablet: 768px
const Tablet = css`
  @media (max-width: 768px) {
    &::after {
      all: unset !important;
    }
    p {
      display: none;
    }
  }
`;
//---Mobile M: 375px
const Mobile = css<{ className?: any }>`
  @media (max-width: 375px) {
    ${({ className }) =>
      className &&
      css`
        display: none;
      `}
  }
`;

export const NavLinkItem = styled(Link)<{ isactive?: number }>`
  && {
    ${[Laptop, Tablet, Mobile]}
  }
`;
