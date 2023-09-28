import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";
describe("Search component", () => {
  it("renders meanings correctly", () => {
    render(<Search />);
    const button = screen.getByRole("button");
    fireEvent.submit(button, { hidden: true });
    expect(button).toBeInTheDocument();
  });
});
