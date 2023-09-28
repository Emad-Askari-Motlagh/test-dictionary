import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DicContext } from "../contexts/dictionary.context";
import useContext from "../hooks/useWord"; // Import your context provider function
import axios from "axios"; // Import axios

describe("DicContext Provider", () => {
  it("fetches and returns the expected word data", async () => {
    const expectedWordData = [
      {
        word: "hello",
        meanings: [
          {
            partOfSpeech: "exclamation",
            definitions: [
              {
                definition:
                  "used as a greeting or to begin a phone conversation.",
              },
            ],
          },
        ],
      },
    ];

    // Mock the axiosInstance get method to return expected data
    axios.get = jest.fn().mockResolvedValue({ data: expectedWordData });

    const Wrapper = ({ children }) => (
      <DicContext.Provider value={useContext({ children: null })}>
        {children}
      </DicContext.Provider>
    );

    render(<Wrapper />);
  });
});
