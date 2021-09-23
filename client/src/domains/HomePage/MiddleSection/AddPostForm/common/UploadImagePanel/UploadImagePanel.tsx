import React from "react";
import styled from "styled-components";

// styles
import { PanelModel } from "../PanelModel/PanelModel.style";
import { CustomCoverScreen } from "../CustomCoverScreen/CustomCoverScreen.style";

// components
import Title from "../Title/Title";

interface UploadImagePanelValues {
  isactive?: boolean;
  closePanel?: () => void;
}
function UploadImagePanel({ isactive, closePanel }: UploadImagePanelValues) {
  return (
    <>
      <PanelModel isactive={isactive}>
        <Title text="Edit your photo" closePanel={closePanel} />
        <SelectImageBox>
          <label htmlFor="upload-photo">Select images to share</label>
          <input type="file" id="upload-photo" name="img" accept="image/*" />
        </SelectImageBox>
        <Bottom>
          <CancelBtn onClick={closePanel}>Cancel</CancelBtn>
          <DonelBtn>Done</DonelBtn>
        </Bottom>
      </PanelModel>
      <CustomCoverScreen isactive={isactive} />
    </>
  );
}

const SelectImageBox = styled.div`
  display: flex;
  height: 160px;
  align-items: center;
  justify-content: center;
  label {
    font-size: 15px;
    padding: 8px 10px;
    border-radius: 5px;
    color: rgb(10, 102, 194);
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background-color: rgba(10, 102, 194, 0.1);
    }
  }
  #upload-photo {
    transform: scale(0);
    position: absolute;
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 10px 25px;
  box-shadow: 0 -1px rgba(0, 0, 0, 0.1);

  font-size: 15px;
  color: rgb(10 102 194);
  font-weight: 500;
`;
const CancelBtn = styled.div`
  && {
    padding: 6px 16px;
    box-shadow: 0 0 0 1px rgb(10, 102, 194);
    border-radius: 30px;
    cursor: pointer;
    margin-right: 10px;

    color: rgb(10, 102, 194);
    &:hover {
      background-color: rgba(10, 102, 194, 0.123);
      box-shadow: 0 0 0 2px rgb(10, 102, 194);
    }
  }
`;
const DonelBtn = styled.div``;

export default UploadImagePanel;
