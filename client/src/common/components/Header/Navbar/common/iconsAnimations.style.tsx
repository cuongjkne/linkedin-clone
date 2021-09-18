import { css } from 'styled-components';

export const subsidenceEffect = css`
  @keyframes effect {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(0.85, 0.85);
    }
    100% {
      transform: scale(0.85, 0.85);
    }
  }
  animation: effect 0.2s ease-in-out;
  animation-fill-mode: forwards;
`;

//TODO: replace for other files
