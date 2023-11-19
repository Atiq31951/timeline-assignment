import React from "react";
import styled from "styled-components";

import { formatDate } from "../utils/common";

function TimeLine({ isLeft, type, date, title, details, images }) {
  const renderJSX = () => {
    const { year, month, day } = formatDate(date);

    return (
      <div className="timeline-component timeline-content">
        <Styled.CardContainer>
          {type === 3 && images.length === 1 && (
            <div className="personal-type">
              <img src={images[0]} height={48} width={48} />
            </div>
          )}
          <div className="description-container">
            <div className="heading">{title}</div>
            <div className="description">{details}</div>

            {images?.length && type !== 3 && (
              <div className="image-container-shared">
                {images.map((url) => (
                  <div key={url + "image" + isLeft} className="image-item">
                    <img src={url} height={48} width={48} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="date-container">
            <div className="month">{month}</div>
            <div className="day">{day}</div>
            <div className="month">{year}</div>
          </div>
        </Styled.CardContainer>
      </div>
    );
  };

  const renderMiddleStyles = () => {
    return (
      <div className="timeline-middle">
        <div className="timeline-circle"></div>
      </div>
    );
  };

  return isLeft ? (
    <>
      {renderJSX()}
      {renderMiddleStyles()}
      <div className="timeline-empty"></div>
    </>
  ) : (
    <>
      <div className="timeline-empty"></div>
      {renderMiddleStyles()}
      {renderJSX()}
    </>
  );
}

export default TimeLine;

const Styled = {};

Styled.CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 8px;

  .description-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    .heading {
      font-size: 14px;
      color: black;
      font-weight: 600;
    }

    .description {
      display: flex;
      font-size: 12px;
      margin: 4px 4px 4px 0px;

    }

    .image-container-shared {
      display: flex;
      gap: 4px;
      margin-right: 4px;

      .image-item {
        border-radius: 8px;
        height: 48px;
        width: 48px;
      }
    }
  }

  .personal-type {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  .date-container {
    border-left: 1px solid grey;
    display: flex;
    flex-direction: column;
    padding: 8px;
    justify-content: center;
    align-items: center;

    .month {
      font-size: 13px;
    }

    .day {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
