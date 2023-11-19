import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

import withTimelineList from "../store/hoc/withTimelineList";

import { LIMIT } from "../config/timeline";

// components
import TimeLine from "./TimeLine";

function TimelineContainer({ data = [], loading, fetchTimelineLists }) {
  const [currentOffset, setCurrentOffset] = useState(1);
  useEffect(() => {
    fetchTimelineLists({ offset: 1 });
  }, []);

  const handleLoadMoreTimelines = () => {
    console.log("Loadmore called");
    // if (loading) {
    //   return;
    // }
    fetchTimelineLists({ offset: currentOffset + 1 });
    setCurrentOffset(currentOffset + 1);
  };

  const hasMore = !!(data.length % LIMIT);
  console.log("🚀 hasMore:", hasMore, "loadmore", currentOffset)

  return (
    <Styled.Timeline id="scrollableDiv">
      {loading && !data.length ? (
        <h1>Loading data...</h1>
      ) : (
        <InfiniteScroll
          dataLength={100}
          next={handleLoadMoreTimelines}
          style={{ display: "flex", flexDirection: "column-reverse" }}
          hasMore={hasMore}
          scrollableTarget="scrollableDiv"
        >
          <section className="design-section">
            <div className="timeline">
              {data.map((tl, index) => (
                <TimeLine
                  key={String(tl.date) + index}
                  isLeft={!(index % 2)}
                  {...tl}
                />
              ))}
            </div>
          </section>
        </InfiniteScroll>
      )}
    </Styled.Timeline>
  );
}

export default withTimelineList(TimelineContainer);

const Styled = {};

Styled.Timeline = styled.div`
  margin-top: 20px;

  .design-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  .design {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timeline {
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .timeline-content {
    display: flex;
    padding: 20px;
    background: #fffefe;
    box-shadow: 1px 1px 10px #1a1a1a;
    color: #292424;
    padding: 4px;
    transition: 0.4s ease;
    overflow-wrap: break-word !important;
    margin: 1rem;
    margin-bottom: 20px;
    border-radius: 3px;
  }

  .timeline-component {
    margin: 10px 20px;
  }

  @media screen and (min-width: 768px) {
    .timeline {
      display: grid;
      grid-template-columns: 1fr 3px 1fr;
    }
    .timeline-middle {
      position: relative;
      background-color: grey;
      width: 3px;
      height: 100%;
    }
    .main-middle {
      opacity: 0;
    }
    .timeline-circle {
      position: absolute;
      top: 45%;
      left: 50%;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #3c57e0;
      transform: translateX(-50%);
      border: 3px solid white;
    }
  }
`;
