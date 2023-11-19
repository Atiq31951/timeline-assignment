import { useState } from "react";
import styled from "styled-components";

import { TIMELINE_TYPES } from "../config/timeline";

function Form({ onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(TIMELINE_TYPES.COMPANY);

  const handleClickSubmit = (e) => {
    e.stopPropagation();

    onSubmit({
      title,
      description,
      type,
    });

    setDescription("");
    setTitle("");
    setType(1);
  };

  return (
    <Styled.Modal>
      <div className="header">
        <div>Add new listing</div>
        <div className="cross-button" onClick={onClose}>
          x
        </div>
      </div>

      <div className="inputs">
        <div className="title">Title</div>
        <input
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          id="title"
          name="fname"
          value={title}
        />
      </div>

      <div className="inputs">
        <div className="title">Description</div>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          id="title"
          name="fname"
          value={description}
        />
      </div>

      <div className="checkboxes">
        <div className="title">Type of timeline</div>
        <div>
          <input
            type="radio"
            id="company"
            name="company"
            checked={type === TIMELINE_TYPES.COMPANY}
            onChange={(e) =>
              setType(e.target.checked && TIMELINE_TYPES.COMPANY)
            }
          />
          <label for="company">Company</label>
        </div>

        <div>
          <input
            type="radio"
            id="team"
            name="team"
            checked={type === TIMELINE_TYPES.TEAM}
            onChange={(e) => setType(e.target.checked && TIMELINE_TYPES.TEAM)}
          />
          <label for="css">Team</label>
        </div>
        <div>
          <input
            type="radio"
            id="personal"
            name="personal"
            checked={type === TIMELINE_TYPES.PERSONAL}
            onChange={(e) =>
              setType(e.target.checked && TIMELINE_TYPES.PERSONAL)
            }
          />
          <label for="personal">Personal</label>
        </div>
        <div>
          <input
            type="radio"
            id="generel"
            name="generel"
            checked={type === TIMELINE_TYPES.GENEREL}
            onChange={(e) =>
              setType(e.target.checked && TIMELINE_TYPES.GENEREL)
            }
          />
            <label for="javascript">Generel</label>
        </div>
      </div>
      <div className="footer">
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleClickSubmit}>Okay</button>
      </div>
    </Styled.Modal>
  );
}

export default Form;

const Styled = {};

Styled.Modal = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 30px;
  padding: 8px;
  background-color: #edefd8;
  right: 0px;
  box-shadow: 10px 10px 10px grey;
  border-radius: 6px;
  color: black;
  max-width: 300px;
  z-index: 600;

  .header {
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    padding: 4px 4px 8px 0px;

    .cross-button {
      cursor: pointer;
      font-size: 14px;
      background-color: #ee6a6a;
      padding: 4px;
      border-radius: 50%;
    }
  }

  .footer {
    margin: 8px 0px;
    border-top: 1px solid grey;
    display: flex;
    padding: 8px 0px;
    justify-content: space-between;

    button {
      padding: 4px;
      background-color: #84e884;
      border: none;
      color: black;
      font-weight: 600;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 4px;
    margin-bottom: 8px;

    .title {
      font-weight: 600;
    }
  }

  .checkboxes {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }
`;
