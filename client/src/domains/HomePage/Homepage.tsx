// styles
import { Container } from "./Homepage.style";

// components
import LeftSection from "./LeftSection/LeftSection";
import Middle from "./MiddleSection/MiddleSection";
import RightSection from "./RightSection/RightSection";

function Home() {
  return (
    <Container>
      <LeftSection />
      <Middle />
      <RightSection />
    </Container>
  );
}
export default Home;
