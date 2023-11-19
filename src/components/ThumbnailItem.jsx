import React, { useState } from "react";
import View from "../assets/view.png";
import Comment from "../assets/comment.png";
import Like from "../assets/like.png";
import { addKMB } from "../utils/common";
import Modal from "./Modal";

function ThumbnailItem({
  data,
  data: {
    content: { thumbnail_url, views, likes, comments },
  },
  allData,
  index,
}) {
  const [isModalOpen, setIsModalOPen] = useState(false);

  return (
    <>
      <div onClick={() => setIsModalOPen(true)} className="thumbnail-item">
        <div className="image">
          <img height={280} width={230} src={thumbnail_url} />
        </div>
        <div className="content-description">
          <div>
            <span>
              <img src={View} height={10} width={20} />
            </span>
            <span>{addKMB(views)}</span>
          </div>
          <div>
            <span>
              <img src={Like} height={10} width={20} />
            </span>
            <span>{addKMB(likes)}</span>
          </div>
          <div>
            <span>
              <img src={Comment} height={10} width={20} />
            </span>
            <span>{addKMB(likes)}</span>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          allData={allData}
          index={index}
          isOpen
          onClose={() => setIsModalOPen(false)}
        />
      )}
    </>
  );
}

export default ThumbnailItem;
