import React from "react";
import styled from "styled-components";
function NoPage() {
  return (
    <div>
      <Container>No Page Found</Container>
    </div>
  );
}

export default NoPage;

const Container = styled.div`
  min-height: calc(100vh - 70px);

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`;
