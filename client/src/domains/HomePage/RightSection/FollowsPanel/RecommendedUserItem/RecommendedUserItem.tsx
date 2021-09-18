import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//icons
import LinkdelnSmallIcon from "../../../../../common/components/Icons/LinkdelnSmallIcon";
import PlusIcon from "../../../../../common/components/Icons/PlusIcon";

function RecommendedUserItem({ linkUrl, imgSrc, name, bio }) {
  return (
    <Container>
      <Avatar to={linkUrl}>
        <img src={imgSrc} alt="user.jpg" />
      </Avatar>
      <Bio>
        <Link to={linkUrl}>
          <h3>
            {name}
            <LinkdelnSmallIcon />
          </h3>
          <p>{bio.length > 70 ? bio.slice(0, 70) + " ..." : bio}</p>
        </Link>
        <p>
          <PlusIcon /> Follow
        </p>
      </Bio>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 0 20px 0 15px;
`;
const Bio = styled.div`
  & > a {
    h3 {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      svg {
        margin-left: 4px;
      }
    }
    p {
      font-size: 13px;
      /* color:black; */
      font-weight: 300;
    }
  }
  & > p {
    padding: 8px 15px;
    border-radius: 50px;
    background-color: inherit;
    border: 1px solid rgb(102 102 102);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 5px;
    width: 100px;
    height: 33px;
    color: rgb(102 102 102);
    svg {
      fill: rgb(102 102 102);
      margin-right: 5px;
    }
    &:hover {
      background-color: rgb(235 235 235);
      box-shadow: 0 0 0 1px rgb(102 102 102);
    }
  }
`;
const Avatar = styled(Link)`
  margin-right: 15px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
  }
`;
export default RecommendedUserItem;
