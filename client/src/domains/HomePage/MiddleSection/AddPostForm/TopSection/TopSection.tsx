// components
import ShowPanelBox from "./ShowPanelBox/ShowPanelBox";

// styles
import { Container, Avatar } from "./TopSection.style";

function TopSection() {
  return (
    <>
      <Container>
        <Avatar>
          <img src="/imgs/user.jpg" alt="user.jpg" />
        </Avatar>
        <ShowPanelBox />
      </Container>
    </>
  );
}

export default TopSection;
