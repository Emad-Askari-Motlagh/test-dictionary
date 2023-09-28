import React from "react";
import { render, screen } from "@testing-library/react";
import Translate from "../components/Tranlate";
import Word from "../components/Word";

const sampleDataArray = [
  {
    word: "hello",
    phonetic: "həˈləʊ",
    phonetics: [
      {
        text: "həˈləʊ",
        audio:
          "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
      },
      {
        text: "hɛˈləʊ",
      },
    ],
    origin: "early 19th century: variant of earlier hollo ; related to holla.",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          {
            definition: "used as a greeting or to begin a phone conversation.",
            example: "hello there, Katie!",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "an utterance of ‘hello’; a greeting.",
            example: "she was getting polite nods and hellos from people",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "say or shout ‘hello’.",
            example: "I pressed the phone button and helloed",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
    ],
  },
];

describe("Translate Component", () => {
  it("renders the Translate component with sample data", () => {
    render(<Translate dataArray={sampleDataArray} />);

    // Check if the Translate component renders the Word component for each item in the dataArray
    const wordComponents = screen.getAllByTestId("word-component");
    expect(wordComponents.length).toBe(sampleDataArray.length);

    // Check if the Word component is rendered correctly with the sample data
    sampleDataArray.forEach((data, index) => {
      const wordElement = screen.getByText(`Word: ${data.word}`);
      const phoneticElement = screen.getByText(`Phonetic: ${data.phonetic}`);
      const originElement = screen.getByText(`Origin: ${data.origin}`);
      const phoneticLabels = screen.getAllByText("Phonetic:");
      const meaningLabels = screen.getAllByText("Meanings:");

      expect(wordElement).toBeInTheDocument();
      expect(phoneticElement).toBeInTheDocument();
      expect(originElement).toBeInTheDocument();
      expect(phoneticLabels.length).toBe(data.phonetics.length);
      expect(meaningLabels.length).toBe(data.meanings.length);
    });
  });
});
