// Import necessary testing utilities
import React from "react";
import { render, screen } from "@testing-library/react";
import Translate from "../components/Tranlate";

// Mock the useWord and useTheme hooks
jest.mock("../hooks/useWord", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    fetchWord: jest.fn(),
    saveWord: jest.fn(),
    isWordSaved: false,
    word: "hello",
    error: null,
    meaning: [
      {
        word: "hello",
      },
    ],
    loading: false,
  })),
}));

jest.mock("../hooks/useTheme", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    theme: "light", // Mock the theme value
  })),
}));

// Write test cases for the Translate component
describe("Translate Component", () => {
  it("renders the Translate component with sample data", () => {
    const sampleData = [
      {
        word: "hello",
      },
    ];

    render(<Translate dataArray={sampleData} />);

    // Check if the Translate component renders Word components
    const wordComponents = screen.getAllByTestId("word-component");
    expect(wordComponents.length).toBe(sampleData.length);
  });
});
