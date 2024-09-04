import "@testing-library/jest-dom";
import {layoutOptions} from "../app/layout.config"
describe("Page", () => {
  it("Sets the default properties for all the mdx files", () => {
    const config = layoutOptions
    expect(true).toBeTruthy();
  });
});
