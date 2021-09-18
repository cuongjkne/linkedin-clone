import styled, { css } from 'styled-components';

//responsive
//---Laptop S/L: 1024px/1440px
const Laptop = css`
  && {
    @media (max-width: 1440px) {
      display: flex;
      background-color: white;
      padding: 0 100px;
      align-items: center;
      margin: auto;
      position: fixed;
      width: 100vw;
      top: 0;
      z-index: 1;
      border-bottom: 1px solid #e0dfdc;
      #logo {
        margin-right: 20px;
      }
    }
    @media (max-width: 1024px) {
      padding: 0 50px;
      min-width: auto;
    }
  }
`;
//---Tablet: 768px
const Tablet = css`
  && {
    @media (max-width: 768px) {
      padding: 0 30px;
      #logo {
        margin-right: 15px;
      }
    }
  }
`;
//---Mobile S/L/M: 320px/375px/425px
const Mobile = css`
  && {
    @media (max-width: 425px) {
      padding: 0 5px 0 15px;
    }
  }
`;

//styles
export const Container = styled.div`
  ${[Laptop, Tablet, Mobile]}
`;
