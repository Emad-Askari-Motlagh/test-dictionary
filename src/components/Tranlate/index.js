import React from "react";
import Word from "../Word/index";

const Tranlate = ({ dataArray }) => {
  return (
    <div>
      {dataArray?.length > 0 &&
        dataArray.map((item, index) => <Word key={index} data={item} />)}
    </div>
  );
};

export default Tranlate;
