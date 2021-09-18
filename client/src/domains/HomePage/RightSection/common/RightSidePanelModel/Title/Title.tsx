import React, { useState } from 'react';

import styled from 'styled-components';
//icons
import InfoIcon from '../../../../../../common/Icon/InfoIcon';

function Title({ title, children }) {
  const [isPanelActive, setisPanelActive] = useState(false);
  const tooglePanelState = () => {
    setisPanelActive(!isPanelActive);
  };

  const closePanel = () => {
    setisPanelActive(false);
  };
  return (
    <Container>
      <h1>{title}</h1>
      <IconWarrper onMouseDown={tooglePanelState}>
        <InfoIcon />
      </IconWarrper>
      {React.cloneElement(children, { isPanelActive, closePanel })}
    </Container>
  );
}
const Container = styled.div`
  && {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    h1 {
      font-size: 15.5px;
    }
  }
`;
const IconWarrper = styled.div`
  padding: 5px;
  border-radius: 50px;
  height: 36px;
  width: 36px;
  cursor: pointer;
  border-radius: 100px;
  padding: 10px;
  svg {
    fill: rgb(102 102 102);
  }
  &:hover {
    background-color: #ebebeb;
  }
`;
export default Title;
