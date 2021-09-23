import React from "react";
import styled from "styled-components";
// icons
import AnyoneIcon from "../../../../../../../../common/components/Icons/AnyoneIcon";
import DocumentIcon from "../../../../../../../../common/components/Icons/DocumentIcon";
import ImageIcon from "../../../../../../../../common/components/Icons/ImageIcon";
import JobIcon from "../../../../../../../../common/components/Icons/JobIcon/JobIcon";
import StarBurstIcon from "../../../../../../../../common/components/Icons/StarBurstIcon";
import ThreeDotsIcon from "../../../../../../../../common/components/Icons/ThreeDotsIcon";
import VideoIcon from "../../../../../../../../common/components/Icons/VideoIcon";
import AnalyticIcon from "../../../../../../../../common/components/Icons/AnalyticIcon";

function Bottom() {
  return (
    <Container>
      <AddHastag>Add hashtag</AddHastag>
      <Wrapper>
        <MediaBar>
          <div>
            <ImageIcon />
          </div>

          <div>
            <VideoIcon />
          </div>
          <div>
            <DocumentIcon />
          </div>
          <div>
            <JobIcon />
          </div>
          <div>
            <StarBurstIcon />
          </div>
          <div>
            <AnalyticIcon />
          </div>
          <div>
            <ThreeDotsIcon />
          </div>
        </MediaBar>
        <AnyOneBtn>
          <AnyoneIcon />
          <p>Anyone</p>
        </AnyOneBtn>
        <PostBtn>Post</PostBtn>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 15px 25px 15px 17px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

const AddHastag = styled.div`
  color: rgb(42, 123, 202);
  font-weight: 500;
  font-size: 15.5px;

  cursor: pointer;
  border-radius: 5px;
  width: fit-content;
  padding: 6px 8px;

  &:hover {
    background-color: #2a7aca2d;
  }
`;
const MediaBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 5px;

  & > div {
    display: flex;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 100px;
    }
  }
  svg {
    fill: rgba(0, 0, 0, 0.6);
    width: 23px;
    height: 23px;
  }
`;
const AnyOneBtn = styled.div`
  display: flex;
  align-items: center;

  height: 30px;
  margin-left: 10px;
  margin-right: auto;
  cursor: pointer;
  padding: 2px 10px;
  border-radius: 30px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  svg {
    fill: rgba(0, 0, 0, 0.6);
    margin-right: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }
`;
const PostBtn = styled.div`
  background-color: rgb(10, 102, 194);
  color: white;
  font-weight: 500;
  font-size: 16px;
  padding: 6px 18px;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: rgb(11, 89, 167);
  }
`;
export default Bottom;
