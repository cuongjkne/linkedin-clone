import React, { useState } from "react";

// components
import CoverScreen from "../../../CoverScreen/CoverScreen";
import ItemsPanel from "./ItemOptionsPanel/ItemOptionsPanel";

// icons
import ThreeDotsIcon from "../../../Icons/ThreeDotsIcon";

// styles
import { Container } from "./NavOptionsItem.style";

// Used for Mobile mode
function NavOptionsItem() {
  const [isOptionsPanelActive, setIsOptionsPanelActive] = useState(false);
  const [isUserPanelActive, setIsUserPanelActive] = useState(false);
  const [isWorkPanelActive, setIsWorkItemActive] = useState(false);
  // refs
  const container: any = React.createRef();

  // functions
  const toggleOptionsPanelState = () => {
    setIsUserPanelActive(false);
    setIsWorkItemActive(false);
    setIsOptionsPanelActive(!isOptionsPanelActive);
  };
  const blurOptionsPanel = (e) => {
    container.current.blur();
    if (container.current.contains(e.relatedTarget, e.target)) {
      return;
    }
    setIsOptionsPanelActive(false);
    setIsUserPanelActive(false);
    setIsWorkItemActive(false);
  };
  //--userPanel
  const showUserPanel = () => {
    setIsUserPanelActive(true);
    setIsOptionsPanelActive(false);
  };
  const userPanel = {
    showUserPanel,
    isUserPanelActive,
  };
  //--workPanel
  const showWorkPanel = () => {
    setIsWorkItemActive(true);
    setIsOptionsPanelActive(false);
  };
  const workPanel = {
    showWorkPanel,
    isWorkPanelActive,
  };
  return (
    <>
      <Container
        ref={container}
        tabIndex={1}
        onBlur={(e) => blurOptionsPanel(e)}
      >
        <div onMouseDown={toggleOptionsPanelState}>
          <ThreeDotsIcon />
        </div>

        <ItemsPanel
          userPanel={userPanel}
          workPanel={workPanel}
          isactive={isOptionsPanelActive}
        />
      </Container>
      <CoverScreen isactive={isWorkPanelActive} />
    </>
  );
}

export default NavOptionsItem;
