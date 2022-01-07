import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 32px;
`

function Loading() {
  return (
    <Wrapper>
      Loading...
    </Wrapper>
  )
}

export default Loading;