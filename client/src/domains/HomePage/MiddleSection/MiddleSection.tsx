import React from "react";
import styled from "styled-components";
import AddPostForm from "./AddPostForm/AddPostForm";
import { PostsList } from "./PostsList/PostsList";

function MiddleSection() {
  return (
    <Container>
      <AddPostForm />
      <PostsList />
    </Container>
  );
}
const Container = styled.div``;
export default MiddleSection;
//TODO: middle
