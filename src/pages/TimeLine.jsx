import React from "react";
import styled from "styled-components";

import TimelineContainer from "../components/TimelineContainer";

function TimeLine() {
  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>Our Company Milestone</h1>
        <h3>WOW..!!! WHAT A JOURNEY SO FAR..!!!</h3>
      </Styled.Heading>
      <TimelineContainer />
    </Styled.Container>
  );
}

const Styled = {};

Styled.Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  position: relative;
  width: 100vw;

  ::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background-color: red;
    top: 0;
    left: 50%;
    margin-left: 3px;
    z-index: 100;
  }
`;

Styled.Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  h3 {
    margin: 0;
    color: grey;
  }

  h1 {
    margin-bottom: 10px;
    color: black;
  }
`;

export default TimeLine;
