import React from "react";
import { useHistory } from "react-router-dom";

// icons
import HomeIcon from "../../../Icons/HomeIcon";
import AnimateJobIcon from "../../../Icons/JobIcon/AnimateJobIcon";
import MessageIcon from "../../../Icons/MessageIcon";
import NetworkIcon from "../../../Icons/NetworkIcon";
import NotificationIcon from "../../../Icons/NotificationIcon";

// styles
import { NavLinkItem } from "./NavLinkItems.style";

function NavLinkItems() {
  // link items
  const items = [
    {
      text: "Home",
      path: "/feed",
      children: <HomeIcon />,
    },
    {
      text: "My Network",
      path: "/mynetwork",
      children: <NetworkIcon />,
    },
    {
      text: "Jobs",
      path: "/jobs",
      children: <AnimateJobIcon />,
    },
    {
      text: "Messaging",
      path: "/messaging",
      // this className is to hide the item in mobile mode
      className: "nav_linkitems_hidden",
      children: <MessageIcon />,
    },
    {
      text: "Notifications",
      path: "/notifications",
      // this className is to hide the item in mobile mode
      className: "nav_linkitems_hidden",
      children: <NotificationIcon />,
    },
  ];
  //render lists
  const Items = items.map((item, index) => (
    <Item
      key={index}
      text={item.text}
      path={item.path}
      className={item.className || ""}
    >
      {item.children}
    </Item>
  ));
  return <>{Items}</>;
}

const Item = ({ text, path, children, className }) => {
  const history = useHistory();
  const currentPath = history.location.pathname;
  const isactive = currentPath === path;
  return (
    <NavLinkItem className={className} isactive={isactive ? 1 : 0} to={path}>
      {React.cloneElement(children, { isactive })}
      <p>{text}</p>
    </NavLinkItem>
  );
};
export default NavLinkItems;
