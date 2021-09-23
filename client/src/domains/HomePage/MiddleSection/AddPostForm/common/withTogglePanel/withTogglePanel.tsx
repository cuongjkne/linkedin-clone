import React, { useState } from "react";

const withTogglePanel =
  (Component) =>
  ({ ...props }) => {
    const [isPanelActive, setisPanelActive] = useState(false);

    const closePanel = () => {
      setisPanelActive(false);
    };
    const openPanel = () => {
      setisPanelActive(true);
    };
    return (
      <Component
        {...props}
        isPanelActive={isPanelActive}
        closePanel={closePanel}
        openPanel={openPanel}
      />
    );
  };
export default withTogglePanel;
