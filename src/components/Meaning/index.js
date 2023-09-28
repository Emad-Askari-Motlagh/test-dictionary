// Meaning.js
import React from "react";

const Meaning = ({ data }) => {
  return (
    <div>
      <p>Part Of Speech: {data.partOfSpeech}</p>
      {data.definitions.map((def, index) => (
        <div key={index}>
          <p>Definition: {def.definition}</p>
          <p>Example: {def.example}</p>
        </div>
      ))}
    </div>
  );
};

export default Meaning;
