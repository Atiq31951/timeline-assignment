import React from "react";
import styled from "styled-components";

function TimelineContainer() {
  return (
    <Styled.TimeLines>
      <Styled.TimelineContainer>
        <div className="container left-container">
          <div className="text-box">Hello</div>
        </div>
      </Styled.TimelineContainer>
      <Styled.TimelineContainer>
        <div className="container  right-container">
          <div className="text-box">Hello</div>
        </div>
      </Styled.TimelineContainer>
      <Styled.TimelineContainer>
        <div className="container  left-container">
          <div className="text-box">Hello</div>
        </div>
      </Styled.TimelineContainer>
      <Styled.TimelineContainer>
        <div className="container  right-container">
          <div className="text-box">Hello</div>
        </div>
      </Styled.TimelineContainer>
      <Styled.TimelineContainer>
        <div className="container  left-container">
          <div className="text-box">Hello</div>
        </div>
      </Styled.TimelineContainer>
      <Styled.TimelineContainer>
        <div className="container  right-container">
          <div className="text-box">Hello</div>
        </div>
      </Styled.TimelineContainer>
      <Styled.TimelineContainer>
        <div className="container  left-container">
          <div className="text-box">Hello</div>
        </div>
      </Styled.TimelineContainer>
    </Styled.TimeLines>
  );
}

export default TimelineContainer;

const Styled = {};

Styled.TimeLines = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

Styled.TimelineContainer = styled.div`
  position: relative;
  margin: 15px auto;
  width: 50%;
  background-color: white;

  .container {
    position: relative;
    width: 50%;
    border: 1px solid red;
    border-radius: 6px;
  }

  .text-box {
    padding: 20px 30px;
    position: relative;
    font-size: 15px;
  }

  .left-container {
    left: -20px;
  }

  .right-container {
    left: calc(50% + 30px);
  }
`;
