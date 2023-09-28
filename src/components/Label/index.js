import React from "react";
import "./Label.styles.scss";

export default function Label({ children }) {
  return (
    <div>
      <label className="label">{children}</label>
    </div>
  );
}
