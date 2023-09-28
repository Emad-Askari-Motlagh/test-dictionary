import React, { createContext, useCallback, useState } from "react";
import axios from "axios";
export const DicContext = createContext();
const endPoint = `https://api.dictionaryapi.dev/api/v2/entries/en`;

export default function useContext({ children }) {
  const [word, setWord] = useState({});
  const [isWordSaved, setIsWordSaved] = useState(false);
  const [savedWords, setSaveWords] = useState([]);
  const [isWordDeleted, setIsWordDeleted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [meaning, setMeaning] = useState([]);

  //FEtch the word information from DB
  async function fetchDb(word) {
    try {
      if (!word) {
        setError("OBS! The input is empty");
        setMeaning([]);
        return;
      }
      setError("");
      setMeaning("");
      setLoading(true);
      const res = await axios.get(`${endPoint}/${word}`);
      setWord({
        word,
        meaning: res.data.find((item) => item.word === word).meanings[0]
          .definitions[0].definition,
      });

      if (res.data) {
        setLoading(false);
      }
      if (res.data?.length) {
        setMeaning([...res.data]);
      }
      if (res.data === "AxiosError") {
        setError(res.data.response.data.title || "Something went wrong");
        console.log(res.data);
      }
    } catch (error) {
      console.log("error", error);
      setError("Something went wrong");
      return error;
    }
  }

  //Save the word and meaning to local storage
  function saveWord(word) {
    try {
      let isDuplicated = false;
      const words = getWordsFromStorage();
      if (words?.length > 0) {
        words.map((res) => {
          if (res.word == word.word) {
            isDuplicated = true;
          }
        });
        if (!isDuplicated) {
          localStorage.setItem("word", JSON.stringify([...words, word]));
          setIsWordSaved(true);
          setTimeout(() => {
            setIsWordSaved(false);
          }, 1500);
        }
      } else {
        localStorage.setItem("word", JSON.stringify([word]));
        setIsWordSaved(true);
        setTimeout(() => {
          setIsWordSaved(false);
        }, 1500);
      }
    } catch (error) {
      setIsWordSaved(true);
    }
  }

  const getAndParseFromLocalStorage = (word) => {
    const result = JSON.parse(localStorage.getItem(word));
    return result;
  };

  //Get the word and meaning from localstorage
  function getWordsFromStorage() {
    const words = getAndParseFromLocalStorage("word");
    if (words?.length > 0) {
      setSaveWords([...words]);
      return words;
    }
  }

  function deleteTheWordFromUserList(wordShouldDelete) {
    const words = getAndParseFromLocalStorage("word");
    const list = words.filter((res) => res.word !== wordShouldDelete);
    localStorage.setItem("word", JSON.stringify(list));
    setIsWordDeleted(true);
  }

  const value = {
    fetchWord: fetchDb,
    saveWord,
    word,
    getWordsFromStorage,
    savedWords,
    isWordSaved,
    deleteTheWordFromUserList,
    isWordDeleted,
    meaning,
    error,
    loading,
  };
  return <DicContext.Provider value={value}>{children}</DicContext.Provider>;
}
