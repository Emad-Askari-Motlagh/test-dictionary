import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaBook, FaBookOpen } from "react-icons/fa";
import useWord from "../../hooks/useWord";
import WordsModal from "../WordsModal/index";
import { useTheme } from "../../hooks/useTheme";
import { FaExchangeAlt } from "react-icons/fa";
import Button_Secoundary from "../ButtonSecoundary/index";

const Header = () => {
  const navigate = useNavigate();
  const {
    saveWord,
    word,
    getWordsFromStorage,
    savedWords,
    deleteTheWordFromUserList,
    isWordDeleted,
  } = useWord();

  useEffect(() => {
    if (isWordDeleted) {
      window.location.reload();
    }
  }, [isWordDeleted]);

  const { toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  function onClickOnBook() {
    getWordsFromStorage();
    setIsModalOpen(!isModalOpen);
  }
  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <FaBookOpen color="white" size={44} />
      </div>
      <div className="nav--row">
        <nav>
          <ul>
            <li>
              <div className="nav--hidden--mobile">
                <FaBook
                  color="rgba(56, 109, 56)"
                  size={33}
                  onClick={onClickOnBook}
                />
                <WordsModal
                  isModalOpen={isModalOpen}
                  savedWords={savedWords}
                  deleteTheWordFromUserList={deleteTheWordFromUserList}
                />
              </div>
            </li>
            <li>
              <Link to="/">
                <AiOutlineHome size={33} color="tomato" />
              </Link>
            </li>
          </ul>
        </nav>
        <Button_Secoundary onClick={toggleTheme}>
          <div>Theme</div>
          <FaExchangeAlt />
        </Button_Secoundary>
      </div>
    </header>
  );
};

export default Header;
