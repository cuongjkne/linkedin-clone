import { Link } from "react-router-dom";

//icons
import ConnectIcon from "../../../../common/components/Icons/ConnectIcon";
import MyItemsIcon from "../../../../common/components/Icons/MyItemsIcon";
import PremiumIcon from "../../../../common/components/Icons/PremiumIcon";
//styles
import {
  Container,
  Header,
  ConnectionSection,
  PremiumSection,
  MyItems,
} from "./PersonalPanel.style";

function PersonalPanel() {
  return (
    <Container>
      <Header>
        <img src="/imgs/background-user.svg" alt="background-user.svg" />

        <div>
          <Link to="">
            <img src="/imgs/user.jpg" alt="user.jpg" />
            Cường Nguyễn
          </Link>
          <p>Front-end Web Developer</p>
        </div>
      </Header>
      <ConnectionSection to="/">
        <div>
          <p>
            <span>Connections</span> <br /> Grow your network
          </p>
          <ConnectIcon />
        </div>
      </ConnectionSection>
      <PremiumSection to="/">
        <p>Access exclusive tools & insights</p>
        <p>
          <PremiumIcon />
          Try Premium for free
        </p>
      </PremiumSection>
      <MyItems to="/">
        <MyItemsIcon />
        <span>My items</span>
      </MyItems>
    </Container>
  );
}

export default PersonalPanel;
