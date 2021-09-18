//icons
import ArrowRightIcon from '../../../../../common/Icon/ArrowRightIcon';

//components
import Title from './Title/Title';
//styles
import { Container, List, LinkButton } from './RightSidePanelModel.style';

function RightSidePanelModel({ title, items, linkText, linkUrl, children }) {
  return (
    <Container>
      <Title title={title}>{children}</Title>
      <List>{items}</List>
      <LinkButton to={linkUrl}>
        <p>
          {linkText}
          <ArrowRightIcon />
        </p>
      </LinkButton>
    </Container>
  );
}

export default RightSidePanelModel;
