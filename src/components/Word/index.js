// Word.js
import React from "react";

import Meaning from "../Meaning/index";
import Phonetic from "../Phonetic/index";
import Label from "../Label/index";

const Word = ({ data }) => {
  return (
    <div data-testid="word-component">
      <Label>Word</Label>
      <p>Word: {data.word}</p>
      <p>Phonetic: {data.phonetic}</p>
      <p>Origin: {data.origin}</p>

      {data.phonetics?.length > 0 &&
        data.phonetics.map((ph, index) => (
          <div key={index}>
            <Label>Phonetic:</Label>
            <Phonetic data={ph} testId="audio-track" />
          </div>
        ))}

      {data.meanings?.length > 0 &&
        data.meanings.map((meaning, index) => (
          <div key={index}>
            <Label>Meanings:</Label>
            <Meaning data={meaning} />
          </div>
        ))}
    </div>
  );
};

export default Word;
