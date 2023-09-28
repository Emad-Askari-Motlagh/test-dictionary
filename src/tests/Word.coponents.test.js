import React from "react";
import { render, screen } from "@testing-library/react";
import Word from "../components/Word";

const sampleData = {
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
};

describe("Word Component", () => {
  it("renders the Word component with sample data", () => {
    render(<Word data={sampleData} />);

    // Check if the Word component renders the word, phonetic, and origin correctly
    const wordElement = screen.getByText("Word: hello");
    const phoneticElement = screen.getByText("Phonetic: həˈləʊ");
    const originElement = screen.getByText(
      "Origin: early 19th century: variant of earlier hollo ; related to holla."
    );

    expect(wordElement).toBeInTheDocument();
    expect(phoneticElement).toBeInTheDocument();
    expect(originElement).toBeInTheDocument();

    // Check if the Word component renders phonetics and meanings correctly
    const phoneticLabels = screen.getAllByText("Phonetic:");
    const meaningLabels = screen.getAllByText("Meanings:");

    expect(phoneticLabels.length).toBe(sampleData.phonetics.length);
    expect(meaningLabels.length).toBe(sampleData.meanings.length);
  });
});
