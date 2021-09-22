import React from "react";
import styled from "styled-components";

function ShowPanelItem({ text, icon, panel }) {
  return (
    <Container>
      {icon}
      <p>{text}</p>
    </Container>
  );
}

// TODO: item
const Container = styled.div`
  display: flex;
  cursor: pointer;
  padding: 14px 7px;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
  margin: 5px 0;
  p {
    text-transform: capitalize;
    margin-left: 10px;
    color: #00000090;
    font-weight: 500;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
export default ShowPanelItem;
