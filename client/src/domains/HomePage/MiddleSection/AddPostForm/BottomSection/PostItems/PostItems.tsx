import React from "react";
// icons
import ArticleIcon from "../../../../../../common/components/Icons/ArticleIcon";
import EventIcon from "../../../../../../common/components/Icons/EventIcon";
import ImageIcon from "../../../../../../common/components/Icons/ImageIcon";
import VideoIcon from "../../../../../../common/components/Icons/VideoIcon";

// components
import UploadImagePanel from "../../common/UploadImagePanel/UploadImagePanel";
import withTogglePanel from "../../common/withTogglePanel/withTogglePanel";
// styles
import { PostItem } from "./PostItems.style";

function PostItems() {
  const items = [
    {
      text: "photo",
      icon: <ImageIcon fill="rgb(113,181,248)" />,
      panel: <UploadImagePanel />,
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
  const Items = items.map(({ text, icon, panel }, index) => (
    <ItemWithTogglePanel key={index} text={text} icon={icon} panel={panel} />
  ));
  return <>{Items}</>;
}

interface ItemValues {
  text: string;
  icon: any;
  panel?: any;
  isPanelActive?: boolean;
  openPanel?: () => void;
  closePanel?: () => void;
}
const Item = ({
  text,
  icon,
  panel,
  isPanelActive,
  openPanel,
  closePanel,
}: ItemValues) => {
  return (
    <>
      <PostItem onClick={openPanel}>
        {icon}
        <p>{text}</p>
      </PostItem>
      {React.cloneElement(panel ? panel : <></>, {
        isactive: isPanelActive,
        closePanel: closePanel,
      })}
    </>
  );
};
const ItemWithTogglePanel = withTogglePanel(Item);

export default PostItems;
