import React from "react";
import styled from "styled-components";

// icons
import ImageIcon from "../../../../../common/components/Icons/ImageIcon";
import VideoIcon from "../../../../../common/components/Icons/VideoIcon";
import ArticleIcon from "../../../../../common/components/Icons/ArticleIcon";
import EventIcon from "../../../../../common/components/Icons/EventIcon";

// components
import ShowPanelItem from "./ShowPanelItem/ShowPanelItem";

function BottomSection() {
  const items = [
    {
      text: "photo",
      icon: <ImageIcon fill="rgb(113,181,248)" />,
      panel: "",
    },
    {
      text: "video",
      icon: <VideoIcon fill="rgb(127,193,94)" />,
      panel: "",
    },
    {
      text: "photo",
      icon: <EventIcon fill="rgb(232,168,73)" />,
      panel: "",
    },
    {
      text: "Write article",
      icon: <ArticleIcon fill="rgb(252,146,149)" />,
      panel: "",
    },
  ];

  const Items = items.map(({ text, icon, panel }) => (
    <ShowPanelItem text={text} icon={icon} panel={panel} />
  ));
  return <Container>{Items}</Container>;
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BottomSection;
