import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ArrowDownIcon from '../../../../../../common/Icon/ArrowDownIcon';

function ShowPanelIcon({ panel }) {
  const [isPanelActive, setisPanelActive] = useState(false);
  const tooglePanelState = () => {
    setisPanelActive(!isPanelActive);
  };
  const closePanel = () => {
    setisPanelActive(false);
  };
  return (
    <Container tabIndex={1} isactive={isPanelActive} onBlur={closePanel} onClick={tooglePanelState}>
      <ArrowDownIcon />
      {isPanelActive ? panel : ''}
    </Container>
  );
}
const Container = styled.div<{ isactive: boolean }>`
  && {
    position: relative;
    ${({ isactive }) =>
      isactive &&
      css`
        svg {
          transform: rotate(180deg);
        }
      `}
  }
`;
export default ShowPanelIcon;
