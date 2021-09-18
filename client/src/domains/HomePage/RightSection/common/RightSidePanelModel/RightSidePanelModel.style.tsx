import { Link } from "react-router-dom";
import styled from "styled-components";

//styles
import { PanelModel } from "../../../../../common/components/Panel/PanelModel.style";

export const Container = styled(PanelModel)`
  margin-bottom: 5px;

  p,
  h3,
  h1 {
    font-weight: 500;
    font-size: 14px;
    color: #444444;
  }
`;

export const LinkButton = styled(Link)`
  && {
    p {
      margin: 10px;

      display: flex;
      align-items: center;
      font-size: 13.5px;
      border-radius: 8px;
      padding: 5px 8px;
      width: fit-content;
      color: #797979;
      font-weight: 400;
      svg {
        margin-left: 4px;
        fill: rgb(102 102 102);
      }
      &:hover {
        background-color: rgb(235 235 235);
      }
    }
  }
`;
export const List = styled.div``;
