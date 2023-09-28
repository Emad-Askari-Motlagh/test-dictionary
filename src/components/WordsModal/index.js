import React from "react";
import "./WordsModal.styles.scss";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
export default function WordsModal({
  savedWords,
  isModalOpen,
  deleteTheWordFromUserList,
}) {
  const navigate = useNavigate();
  return (
    <ul
      className="modal-container"
      onMouseOver={(e) => {
        e.stopPropagation();
      }}
      style={{
        height: isModalOpen ? "fit-content" : 0,
        boxShadow: !isModalOpen && "none",
        border: !isModalOpen && "none",
      }}>
      <h2>Saved Words</h2>
      {savedWords?.length ? (
        savedWords.map((res, i) => {
          return (
            <li
              key={i}
              className="modal-list"
              onClick={() => navigate(`/dictionary/${res.word}`)}>
              <div>
                <div style={{ color: "tomato", fontWeight: 700 }}>
                  {res.word}
                </div>
                <div>{res.meaning}</div>
              </div>

              <MdOutlineDeleteOutline
                className="modal-list__delete"
                onClick={() => deleteTheWordFromUserList(res.word)}
              />
            </li>
          );
        })
      ) : (
        <div>OBS! You have not any words</div>
      )}
    </ul>
  );
}
