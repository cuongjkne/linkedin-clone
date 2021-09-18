import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
//icons
import CloseIcon from '../../../../../common/Icon/CloseIcon';

interface PanelValue {
  text: string;
  linkUrl?: string;
  isPanelActive?: boolean;
  closePanel?: any;
}
function InfoPanel({ text, linkUrl, isPanelActive, closePanel }: PanelValue) {
  //refs
  const ContainerRef: any = useRef();
  //effects
  useEffect(() => {
    ContainerRef.current.blur();
    if (isPanelActive) {
      ContainerRef.current.focus();
    }
  }, [isPanelActive]);
  return (
    <Container isPanelActive={isPanelActive} ref={ContainerRef} tabIndex={0} onBlur={closePanel}>
      <p>
        {text + ' '}
        {linkUrl ? <a href={linkUrl}>Read more</a> : ''}
      </p>
      <div onClick={closePanel}>
        <CloseIcon />
      </div>
    </Container>
  );
}
const Container = styled.div<{ isPanelActive: boolean }>`
  && {
    position: absolute;
    background-color: white;
    padding: 8px 15px;
    border-radius: 8px 0 8px 8px;
    box-shadow: 0px 3px 3px #8a8a8a;
    border: 1px solid #e0dfdc;
    z-index: 2;
    left: -80px;
    display: flex;
    top: -15px;
    p {
      font-weight: 400;
      color: rgb(0 0 0 / 90%);
      font-size: 13.6px;
      width: 280px;
      word-spacing: 1.7px;
      line-height: 20px;
      letter-spacing: 0.3px;
      margin-right: 10px;
      a {
        color: rgb(145 90 210);
        font-weight: 500;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    svg {
      fill: #666;
      cursor: pointer;
      &:hover {
        fill: black;
      }
    }
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.5s;
    ${({ isPanelActive }) =>
      isPanelActive &&
      css`
        opacity: 1;
        transform: scale(1);
      `}
  }
`;
export default InfoPanel;
