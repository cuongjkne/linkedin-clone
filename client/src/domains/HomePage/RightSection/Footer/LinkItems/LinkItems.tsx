import React from 'react';
import styled from 'styled-components';

//panels
import PrivacyTermsPanel from './ShowPanelIcon/Panel/PrivacyTermsPanel';
import BusinessServicesPanel from './ShowPanelIcon/Panel/BusinessServicesPanel';

//icons
import ShowPanelIcon from './ShowPanelIcon/ShowPanelIcon';

function LinkItems() {
  const items = [
    {
      text: 'About',
      link: '/'
    },
    {
      text: 'Accessibility',
      link: '/'
    },
    {
      text: 'Help Center',
      link: '/'
    },
    {
      text: 'Privacy & Terms',
      link: '/',
      icon: <ShowPanelIcon panel={<PrivacyTermsPanel />} />
    },
    {
      text: 'Ad Choices',
      link: '/'
    },
    {
      text: 'Advertising',
      link: '/'
    },
    {
      text: 'Business Services',
      link: '/',
      icon: <ShowPanelIcon panel={<BusinessServicesPanel />} />
    },
    {
      text: 'Get the LinkedIn app',
      link: '/'
    },
    {
      text: 'More',
      link: '/'
    }
  ];
  const Items = items.map(({ text, link, icon }, index) => (
    <p>
      <a key={index} href={link} rel="noreferrer" target="_blank">
        {text}
      </a>
      {icon ? icon : ''}
    </p>
  ));
  return <Container>{Items}</Container>;
}
const Container = styled.div`
  && {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    font-weight: 400;
    justify-content: space-around;
    height: 100px;
    width: 220px;
    p {
      display: flex;
      align-items: center;
      & > a {
        color: rgb(0 0 0 / 60%);
        margin: 0px 4px;

        &:hover {
          text-decoration: underline;
          color: rgb(11, 103, 194);
        }
      }
      svg {
        fill: rgb(97, 97, 96);
        width: 12px;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;
export default LinkItems;
