import { useState } from "react";

//icons
import MultiDotsIcon from "../../../Icons/MultiDotsIcon";
import TriangleIcon from "../../../Icons/TriangleIcon";

//components
import UserPanel from "../common/UserPanel/UserPanel";
import WorkPanel from "../common/WorkPanel/WorkPanel";
import CoverScreen from "../../../CoverScreen/CoverScreen";

// icons
// panels

// styles
import { Item, UserItemWrapper, ItemWrapper } from "./NavPanelShowItems.style";

function NavPanelShowItems() {
  const [isUserItemActive, setIsUserItemActive] = useState(false);
  const [isWorkItemActive, setIsWorkItemActive] = useState(false);
  const toogleUserItemState = () => {
    setIsUserItemActive(!isUserItemActive);
  };

  const blurUserItem = () => {
    setIsUserItemActive(false);
  };

  const toogleWorkItemState = () => {
    setIsWorkItemActive(!isWorkItemActive);
  };

  const blurWorkItem = (e) => {
    setIsWorkItemActive(false);
  };
  return (
    <>
      <UserItemWrapper tabIndex={1} onBlur={() => blurUserItem()}>
        <Item onMouseDown={() => toogleUserItemState()}>
          <img src="/imgs/user.jpg" alt="user.jpg" />
          <p>
            Me <TriangleIcon />
          </p>
        </Item>
        <UserPanel isactive={isUserItemActive} />
      </UserItemWrapper>
      <ItemWrapper tabIndex={1} onBlur={(e) => blurWorkItem(e)}>
        <Item onMouseDown={() => toogleWorkItemState()}>
          <MultiDotsIcon />
          <p>
            Work <TriangleIcon />
          </p>
        </Item>
        <WorkPanel isactive={isWorkItemActive} />
      </ItemWrapper>
      <CoverScreen isactive={isWorkItemActive} />
    </>
  );
}

export default NavPanelShowItems;
