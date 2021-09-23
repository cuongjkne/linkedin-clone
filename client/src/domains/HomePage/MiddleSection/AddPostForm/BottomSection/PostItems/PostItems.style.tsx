import styled from "styled-components";

export const PostItem = styled.div`
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
