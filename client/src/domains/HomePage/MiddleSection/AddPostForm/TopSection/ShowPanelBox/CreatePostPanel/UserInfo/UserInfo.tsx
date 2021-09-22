import React from "react";
import styled from "styled-components";

// icons
import EarthIcon from "../../../../../../../../common/components/Icons/EarthIcon";
import TriangleIcon from "../../../../../../../../common/components/Icons/TriangleIcon";

function UserInfo() {
  return (
    <Container>
      <img src="/imgs/user.jpg" alt="user.jpg" />
      <div>
        <p>Cường Nguyễn </p>
        <ShareStateBtn>
          <EarthIcon />
          Anyone
          <TriangleIcon />
        </ShareStateBtn>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin-right: 10px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 3px;
  }
`;
const ShareStateBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 110px;
  border: 0.05em solid #00000090;
  border-radius: 30px;
  padding: 5px 10px;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);

  svg {
    fill: rgba(0, 0, 0, 0.6);
  }
`;

export default UserInfo;
