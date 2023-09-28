import React from "react";
import Search from "../../components/Search";
import useWord from "../../hooks/useWord";
import Loading from "../../components/Loading";
import "./Home.scss";
import Translate from "../../components/Tranlate";
import { useTheme } from "../../hooks/useTheme";
import { BiSolidBookAdd } from "react-icons/bi";

export default function Home() {
  const { fetchWord, saveWord, isWordSaved, word, error, meaning, loading } =
    useWord();

  const { theme } = useTheme();

  async function onKeyDown(e) {
    if (e.key === "Enter") {
      await fetchWord(e.target.value);
    }
  }

  return (
    <div className={`home home--${theme}-theme`}>
      <main>
        <h1>Online dictionary for everyone</h1>
        <h2>Find a word, add new one and save your favourite words</h2>
        <div className="search-wrapper">
          <Search
            theme={theme}
            label="SEARCH"
            placeholder="Search your word"
            onClick={fetchWord}
            onKeyDown={onKeyDown}
          />

          {meaning?.length > 0 && (
            <span
              className="search-wrapper__add"
              onClick={() => saveWord(word)}>
              <BiSolidBookAdd size={33} color="tomato" />
              {isWordSaved && <BiSolidBookAdd color="green" />}
            </span>
          )}
          {loading && <Loading />}
          {error && <div>{error}</div>}

          {meaning?.length ? <Translate dataArray={meaning} /> : null}
        </div>
      </main>
    </div>
  );
}
