import React from "react";
import AudioTrack from "../AudioTrack/index";

const Phonetic = ({ data }) => {
  return (
    <div>
      <p>Text: {data.text}</p>
      {data.audio && <AudioTrack testId="audio-track" track={data?.audio} />}
    </div>
  );
};

export default Phonetic;
