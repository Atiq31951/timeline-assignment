import React, { useState } from "react";
import styled from "styled-components";

import { addNewTimeline } from "../store/actions/timelines";

import TimelineList from "../components/TimelineList";
import Form from "../components/Form";
import { connect } from "react-redux";

function TimeLine({ addNewTimeline }) {
  const [isModalOpen, setModalopen] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation();
    setModalopen(false);
  };

  const handelSubmit = ({ type, title, description }) => {
    setModalopen(false);
    addNewTimeline({
      data: {
        type,
        title,
        details: description,
        date: new Date().getTime(),
      },
    });
  };

  return (
    <Styled.Container>
      <Styled.Heading>
        <h1>Our Company Milestone</h1>
        <h3>WOW..!!! WHAT A JOURNEY SO FAR..!!!</h3>
      </Styled.Heading>
      <Styled.AddmoreItemContainer>
        <button onClick={() => setModalopen(true)}>
          Add new Timeline
          {isModalOpen && (
            <Form onClose={handleClose} onSubmit={handelSubmit}>
              Hello
            </Form>
          )}
        </button>
      </Styled.AddmoreItemContainer>
      <TimelineList />
    </Styled.Container>
  );
}

const mapDispatchToProps = {
  addNewTimeline,
};

export default connect(null, mapDispatchToProps)(TimeLine);

const Styled = {};

Styled.ModalContainer = styled.div`
  .modal-backdrop {
    background-color: transparent;
  }
  .modal-backdrop-transparent {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: -1000;
  }
  .modal-backdrop-orange {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: orange;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    z-index: 1040;
  }
  .modal-backdrop-blue {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: blue;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    z-index: 1040;
  }
  .modal-transition {
    transition: all 0.4s ease;
  }
`;

Styled.AddmoreItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  button {
    padding: 4px;
    background-color: #5b865b;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
`;

Styled.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
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
