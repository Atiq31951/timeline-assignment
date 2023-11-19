import React from "react";
import ThumbnailItem from "./ThumbnailItem";

function ThumbnailsRow({ thumbnailsData, rowNumber }) {
  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push(rowNumber * 5 + i);
  }

  return (
    <div className="thumbnail-row">
      {items.map((itemIndx) => (
        <ThumbnailItem
          key={thumbnailsData[itemIndx].content.id + "thumbnails"}
          data={thumbnailsData[itemIndx]}
          allData={thumbnailsData}
          index={itemIndx}
        />
      ))}
    </div>
  );
}

export default ThumbnailsRow;
