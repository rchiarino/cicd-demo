import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/[[...slug]]/page";

describe("Page", () => {
  it("renders the title for each page generated", () => {
    render(<Page />);

    const layout = screen.getByText("Next.js Logo");

    expect(logo).toBeInTheDocument();
  });
});
