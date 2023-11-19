import React from "react";
import { numberWithCommas } from "../utils/common";
import ThumbnailsRow from "./ThumbnailsRow";

function ThumbnailView({ total, thumbnailsData }) {
  const totalRows = parseInt(thumbnailsData.length / 5);
  const rows = [];

  for (let i = 0; i < totalRows; i++) {
    rows.push(i);
  }

  return (
    <div className="thumbnails">
      <div className="heading">
        <div className="total">
          <span className="text">All posts</span>
          <span>({numberWithCommas(total)} total posts)</span>
        </div>
        <div className="view-all">View All</div>
      </div>

      <div className="thumbnails-rows">
        {rows.map((indx) => (
          <ThumbnailsRow
            key={indx + "row"}
            rowNumber={indx}
            thumbnailsData={thumbnailsData}
          />
        ))}
      </div>
    </div>
  );
}

export default ThumbnailView;
