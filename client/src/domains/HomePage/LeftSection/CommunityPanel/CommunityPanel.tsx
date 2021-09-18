import React from "react";
import { Link } from "react-router-dom";
//icons
import PlusIcon from "../../../../common/components/Icons/PlusIcon";

//styles
import { Container, Section } from "./CommunityPanel.style";

function CommunityPanel() {
  return (
    <Container>
      <Section>
        <div>
          <Link to="/">Groups</Link>
          <Link to="/">Events</Link>
          <Link to="/">Followed Hastags</Link>
        </div>
        <div>
          <PlusIcon />
        </div>
      </Section>
      <Link to="">Discover more</Link>
    </Container>
  );
}

export default CommunityPanel;
