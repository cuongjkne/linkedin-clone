import React from "react";
// components
import TopSection from "./TopSection/TopSection";
import BottomSection from "./BottomSection/BottomSection";

// styles
import { Container } from "./AddPostForm.style";

function AddPostForm() {
  return (
    <Container>
      <TopSection />
      <BottomSection />
    </Container>
  );
}

export default AddPostForm;
