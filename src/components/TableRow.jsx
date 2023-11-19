import React, { useState } from "react";
import { formatDate, addKMB } from "../utils/common";
import VideoIcon from "../assets/video.png";
import Instagram from "../assets/instagram.png";
import TikTok from "../assets/tiktok.png";
import Modal from "./Modal";

const icons = {
  instagram: Instagram,
  tiktok: TikTok,
};

function TableRow({
  content: { timestamp, title, views, total_engagement, text },
  creator: { username, profile_picture_url, platform },
}) {
  const [showModal, setShowMOdal] = useState(false);

  return (
    <tr>
      <td>{formatDate(timestamp)}</td>
      <td>
        <div className="video-container">
          <div className="video-icon">
            <img height="24" width="24" src={VideoIcon} />
          </div>
          <div className="content-name">{text}</div>
        </div>
      </td>
      <td>
        <div className="profile">
          <div className="picture">
            <img height={24} width={24} src={profile_picture_url} />
          </div>
          <div>@{username}</div>
        </div>
      </td>
      <td>
        <div className="platform">
          <img height={24} width={24} src={icons[platform]} />
        </div>
      </td>
      <td>
        <div className="count">{addKMB(views)}</div>
      </td>
      <td>
        <div className="count">{addKMB(total_engagement)}</div>
      </td>
      <td>
        <div className="count">
          {((total_engagement * 100) / views).toFixed(2)}%
        </div>
      </td>
      <td>
        <div className="view-post">View post</div>
      </td>
    </tr>
  );
}

export default TableRow;
