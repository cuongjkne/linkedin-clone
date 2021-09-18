//components
import { Container } from "./Header.style";
//components
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <Container>
      <a id="logo" href="/feed">
        <img src="/imgs/linkedin.png" alt="logo" />
      </a>

      <Navbar />
    </Container>
  );
}

export default Header;
