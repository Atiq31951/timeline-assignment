import { addKMB, getDaysBefore } from "../utils/common";
import Instagram from "../assets/instagram.png";
import TikTok from "../assets/tiktok.png";
import Go from "../assets/go.png";

const icons = {
  instagram: Instagram,
  tiktok: TikTok,
};

const Modal = ({ isOpen, onClose, allData, index }) => {
  if (!isOpen) return null;

  console.log("allData", allData[index]);

  const data = allData[index];
  const {
    creator: { profile_picture_url, name },
    content: {
      comments,
      timestamp,
      text,
      content_platform,
      external_url,
      views,
      likes,
      thumbnail_url,
    },
    getTime,
  } = data;

  // todo: I could Implement the slider with the modal if I could get extra time

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="video-player">
          <div className="video">
            <div className="content">
              <img src={thumbnail_url} />
            </div>
          </div>
          <div className="description">
            <div className="heading">
              <div className="section-1">
                <img height={44} width={44} src={profile_picture_url} />

                <span className="name">{name}</span>
                <span className="time">
                  {getDaysBefore(timestamp)} days before
                </span>
              </div>
              <div onClick={onClose} className="close">
                X
              </div>
            </div>

            <div className="bodyy">
              <div className="info">
                <div text>{text}</div>
                <a target="_blank" href={external_url} className="origin">
                  <img height={12} width={12} src={Go} />
                  <span>See original post</span>
                  <img height={16} width={16} src={icons[content_platform]} />
                </a>
              </div>

              <div className="analytic">
                <div className="views">
                  <span>{addKMB(views)}</span>
                  <div>Total</div>
                  <div>Views</div>
                </div>
                <div className="views">
                  <span>{addKMB(likes)}</span>
                  <div>Total</div>
                  <div>Likes</div>
                </div>
                <div className="views">
                  <span>{addKMB(comments)}</span>
                  <div>Total</div>
                  <div>Comments</div>
                </div>
                <div className="views">
                  <span>{addKMB(comments)}</span>
                  <div>Total</div>
                  <div>Angagement rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
