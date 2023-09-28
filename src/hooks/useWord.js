import React, { useContext } from "react";
import { DicContext } from "../contexts/dictionary.context.js";

export default function useWord() {
  const context = useContext(DicContext);

  return context;
}
