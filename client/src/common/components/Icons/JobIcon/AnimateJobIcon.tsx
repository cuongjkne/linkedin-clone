import styled, { css } from "styled-components";
import JobIcon from "./JobIcon";

function AnimateJobIcon({ isactive }: { isactive?: boolean }) {
  return (
    <Container isactive={isactive}>
      <JobIcon />
    </Container>
  );
}

const Container = styled.div<{ isactive: boolean }>`
  display: inherit;
  svg {
    #jobIcon-cover {
      transform: scaleY(1);
      transition: transform 0.2s ease-in-out;
    }
    #jobIcon-border {
      transform: scaleY(1);
      transition: transform 0.2s ease-in-out;
    }
  }
  ${({ isactive }) => {
    if (isactive) {
      return css`
        svg {
          #jobIcon-cover {
            transform: scaleY(0.75);
          }
          #jobIcon-border {
            transform: scaleY(0.75);
          }
        }
      `;
    }
  }}
`;
export default AnimateJobIcon;
