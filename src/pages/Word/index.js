import React, { useEffect } from "react";
import "./Word.styles.scss";
import useWord from "../../hooks/useWord";
import Translate from "../../components/Tranlate";
import { useParams } from "../../../node_modules/react-router-dom/dist/index";
import Loading from "../../components/Loading";
import Label from "../../components/Label/index";

export default function Word() {
  const { fetchWord, error, meaning, loading } = useWord();
  const params = useParams();
  useEffect(() => {
    async function fetchTheWord() {
      fetchWord(params["word"]);
    }
    fetchTheWord();
  }, [params]);

  return (
    <div className="word-page-wrapper">
      <Label>{` Information about Word '${params["word"]}'`}</Label>
      {meaning?.length ? <Translate dataArray={meaning} /> : null}
      {loading && <Loading />}
      {error && <div>{error}</div>}
    </div>
  );
}
