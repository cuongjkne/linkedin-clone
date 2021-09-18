import React from 'react';
import styled from 'styled-components';

//styles
import { PanelModel } from '../../../../../../../common/Panel/PanelModel.style';

function PrivacyTermsPanel() {
  const items = [
    {
      text: 'Privacy Policy',
      link: '/'
    },
    {
      text: 'User Agreement',
      link: '/'
    },
    {
      text: 'Cookie Policy',
      link: '/'
    },
    {
      text: 'Copyright Policy',
      link: '/'
    }
  ];
  const Items = items.map(({ text, link }, index) => (
    <a key={index} href={link} rel="noreferrer" target="_blank">
      {text}
    </a>
  ));
  return <Container>{Items}</Container>;
}
const Container = styled(PanelModel)`
  position: absolute;
  padding: 5px 0;
  top: -110px;
  left: -146px;
  border-bottom-right-radius: unset;
  width: 160px;
  box-shadow: 0px 3px 3px #8a8a8a;
  a {
    display: block;
    padding: 4px 15px;
    font-weight: 500;
    font-size: 11.5px;
    letter-spacing: 0.5px;
    word-spacing: 1px;
    color: rgb(25, 25, 25);
    &:hover {
      background-color: rgb(235, 235, 235);
    }
  }
`;
export default PrivacyTermsPanel;
